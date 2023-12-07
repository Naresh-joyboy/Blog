import { useEffect, useState } from "react"
// import React from 'react'

const UseFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null)

    useEffect(() => {
        const abortcont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortcont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for this resource');
                    }
                    return res.json()
                })
                .then(data => {
                    setdata(data)
                    setisPending(false);
                    seterror(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setisPending(false);
                        seterror(err.message);
                    }

                })
        }, 500);

        return () => abortcont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default UseFetch