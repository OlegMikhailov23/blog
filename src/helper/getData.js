const getData = (el, url) => {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch the data')
            }
            return res.json()
        })
        .then(data => {
            el.setState({
                data: data,
                isPending: false,
                error: null,
            })
        })
        .catch((err) => {
            el.setState(({
                isPending: false,
                error: err.message,
            }))
        })
}

export default getData;
