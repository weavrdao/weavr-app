import { db } from './db'

export const Types = {
  Property: "properties"
}

export async function getOne(type, id) {
  const objects = db[type]

  for (const object of objects) {
      if (object.id === id) {
          return object
      }
  }

  return null
}

export async function getAll(type) {
  const objects = db[type]

  return objects
}


export async function addOne(type, object) {
  const objects = db[type]

  object.id = getRandomInt();
  objects.push(object)
  await db.saveFile(type, objects)
}


export async function updateOne(type, object) {
  const objects = db[type]

  for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === object.id) {
        objects[i] = object
        await db.saveFile(type, objects)
        return
      }
  }

  throw new Error('Object not found');
}


export async function deleteOne(type, id) {
  const objects = db[type]

  for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        objects.splice(i, 1)
        await db.saveFile(type, objects)
        return
      }
  }

  throw new Error('Object not found');
}

function getRandomInt() {
  return Math.floor(Math.random() * 1_000_000_000_000);
}