export const logginSuccess = (studentId) => {
  return {
    type: '@auth/LOGGIN_SUCCESS',
    payload: {studentId}
  }
}

export const signedOut = () => {
  return {
    type: '@auth/SIGNED_OUT',
  }
}
