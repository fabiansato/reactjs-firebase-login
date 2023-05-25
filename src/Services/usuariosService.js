import firebase from "../Config/firebase";

export async function create(payload) {
  const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)

  // Combina el nombre y el apellido y actualiza el displayName en el perfil del usuario
  const displayName = `${payload.nombre} ${payload.apellido}`;
  await responseUser.user.updateProfile({ displayName });

  await firebase.firestore().collection("usuarios")
    .doc(responseUser.user.uid)
    .set({
      name: payload.nombre,
      lastname: payload.apellido,
      email: payload.email,
      country: payload.country,
      userId: responseUser.user.uid
    });

  return responseUser.user;
}

export async function login(email, password) {
  const responseUser = await firebase.auth().signInWithEmailAndPassword(email, password)
  return responseUser.user.uid
}
