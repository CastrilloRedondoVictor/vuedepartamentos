import Global from "@/Global";
import axios from "axios";

export default class DepartamentosService {
    getDepartamentos = new Promise(function(resolve) {
        let request = 'api/Departamentos'
        axios.get(Global.apiDepartamentos + request).then(response => {
            setTimeout(() => {
                resolve(response.data)
            }, 1000);
        })
    })



    postDepartamento(data) {
        return new Promise(function(resolve) {
            let request = 'api/Departamentos'
            axios.post(Global.apiDepartamentos + request, data).then(response => {
                resolve(response)
            })
        })
    }

    getDepartamento(id) {
        return new Promise(function(resolve) {
            let request = `api/Departamentos/${id}`
            axios.get(Global.apiDepartamentos + request).then(response => {
                setTimeout(() => {
                    resolve(response.data)
                }, 1000);
            })
        })
    }

    updateDepartamento(data) {
        return new Promise(function(resolve) {
            let request = 'api/Departamentos'
            axios.put(Global.apiDepartamentos + request, data).then(response => {
                resolve(response)
            })
        })
    }

    deleteDepartamento(id) {
        return new Promise(function(resolve) {
            let request = `api/Departamentos/${id}`
            axios.delete(Global.apiDepartamentos + request).then(response => {
                resolve(response.data)
            })
        })
    }
}