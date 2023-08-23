import firebase from "../Config/firebase";

export async function getAll() {
  return await firebase.firestore().collection("productos").get();
}

export async function getById(id) {
  return await firebase.firestore().doc(`productos/${id}`).get();
}

export async function getByDescription(id) {
  return await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  ).then((res) => res.json());
}

export async function create(payload) {
  return await firebase.firestore().collection("productos").add(payload);
}

export async function update(id, data) {
  return await firebase.firestore().doc(`productos/${id}`).set(data);
}

export async function deleteProducto(id) {
  return await firebase.firestore().doc(`productos/${id}`).delete();
}
