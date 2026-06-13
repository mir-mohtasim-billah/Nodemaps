function lockNode(projectId, nodeId, uid){
  db.collection("projects").doc(projectId).update({
    [`locks.${nodeId}`]: {
      user: uid,
      time: Date.now()
    }
  });
}

function unlockNode(projectId, nodeId){
  db.collection("projects").doc(projectId).update({
    [`locks.${nodeId}`]: firebase.firestore.FieldValue.delete()
  });
}
