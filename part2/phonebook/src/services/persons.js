import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}  

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = (props) => {
    const request = axios.delete(baseUrl + props.id,  { data: { 
        id: props.id,
        name: props.name,
        number: props.number
        }
    }).then(response => {
        
    })
    return request
}




export default {getAll, create, deletePerson}