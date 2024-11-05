<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Departamentos</h1>
        
        <table v-if="departamentos.length > 0" class="table table-bordered table-hover">
            <thead class="thead-light">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Localidad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="departamento in departamentos" :key="departamento.idDepartamento">
                    <th>{{ departamento.idDepartamento }}</th>
                    <td>{{ departamento.nombre }}</td>
                    <td>{{ departamento.localidad }}</td>
                    <td>
                        <router-link :to="`/update/${departamento.idDepartamento}`" class="btn btn-sm btn-outline-primary m-2">Editar</router-link>
                        <router-link :to="`/get/${departamento.idDepartamento}`" class="btn btn-sm btn-outline-info m-2">Ver</router-link>
                        <router-link :to="`/delete/${departamento.idDepartamento}`" class="btn btn-sm btn-outline-danger m-2">Borrar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import DepartamentosService from '@/services/DepartamentosService'

var departamentosService = new DepartamentosService();
    export default {
        name: 'DepartamentosView',
        data() {
            return {
                departamentos: []
            }
        },
        methods: {
            getDepartamentos() {
                departamentosService.getDepartamentos.then(response => {
                    this.departamentos = response
                })
            },
            // editarDepartamento(id) {
            //     this.$router.push(`/update/${id}`)
            // },
            // borrarDepartamento(id){
            //     this.$router.push(`/delete/${id}`)
            // },
            // verDepartamento(id){
            //     this.$router.push(`/get/${id}`)
            // }
        },
        mounted() {
            departamentosService.getDepartamentos.then(response => {
                    this.departamentos = response
                })
        },
    }
</script>

<style scoped>
.container {
    max-width: 800px;
}

h1 {
    color: #2c3e50;
    font-size: 26px;
    font-weight: 700;
}

.table {
    margin-top: 20px;
}

.btn-outline-primary {
    color: #007bff;
}

.btn-outline-danger {
    color: #dc3545;
}

.btn:hover {
    color: #fff;
}
</style>

<style>
    @import url(../assets/css/loader.css);
</style>