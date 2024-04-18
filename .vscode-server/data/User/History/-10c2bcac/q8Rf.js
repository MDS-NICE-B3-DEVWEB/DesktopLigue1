try {
    const user = { name, email, password };
    const response = await register(user);
    console.log(response);
    if (response.data.status_code === 200) {
        navigate('/');
    } else {
        setErrorMessage(response.data.message);
    }
}