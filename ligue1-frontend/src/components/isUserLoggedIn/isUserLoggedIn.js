export const isUserLoggedIn = () => {
    const userToken = localStorage.getItem('userToken');
    return userToken !== null;
};