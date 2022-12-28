import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Notebook.com`;
    }, [title])
}

export default useTitle;