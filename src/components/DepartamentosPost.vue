<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Nuevo Departamento</h1>
        
        <form @submit.prevent="postDepartamento" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="idDepartamento">ID del Departamento</label>
                <input 
                    v-model="idDepartamento" 
                    type="number" 
                    class="form-control" 
                    id="idDepartamento" 
                    placeholder="Introduzca el ID del departamento"
                    required
                >
            </div>
            <div class="form-group">
                <label for="nombre">Nombre del Departamento</label>
                <input 
                    v-model="nombre" 
                    type="text" 
                    class="form-control" 
                    id="nombre" 
                    placeholder="Introduzca el NOMBRE del departamento"
                    required
                >
            </div>
            <div class="form-group">
                <label for="localidad">Localidad del Departamento</label>
                <input 
                    v-model="localidad" 
                    type="text" 
                    class="form-control" 
                    id="localidad" 
                    placeholder="Introduzca la LOCALIDAD del departamento"
                    required
                >
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Añadir Departamento</button>
        </form>
    </div>
</template>
<script>
import DepartamentosService from '@/services/DepartamentosService'
// import Swal from 'sweetalert2';

var departamentosService = new DepartamentosService();
    export default {
        name: 'DepartamentosPost',
        data() {
            return {
                idDepartamento: 0,
                nombre: '',
                localidad: ''
            }
        },
        methods: {
            postDepartamento() {
                let data = {
                    idDepartamento: parseInt(this.idDepartamento),
                    nombre: this.nombre,
                    localidad: this.localidad
                }
                departamentosService.postDepartamento(data).then( response => {
                    // Swal.fire(
                    //     'Añadido',
                    //     'El departamento ha sido añadido.',
                    //     'success'
                    // );
                    console.log(response)
                    this.$router.push('/');
                }
                )
            }
        }
    }
</script>
<style>
    @import url(../assets/css/loader.css);
</style>