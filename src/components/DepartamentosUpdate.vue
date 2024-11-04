<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Editar Departamento</h1>
        
        <form v-if="nombre!=''" @submit.prevent="updateDepartamento" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="idDepartamento">ID del Departamento</label>
                <input 
                    v-model="idDepartamento" 
                    type="number" 
                    class="form-control" 
                    id="idDepartamento" 
                    placeholder="Introduzca el ID del departamento"
                    required
                    disabled
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
            <button type="submit" class="btn btn-primary btn-block mt-3">Editar Departamento</button>
        </form>
        <div v-else>
            <div class="loader"></div>
        </div>
    </div>
</template>
<script>
import DepartamentosService from '@/services/DepartamentosService'
import Swal from 'sweetalert2';

var departamentosService = new DepartamentosService();
    export default {
        name: 'DepartamentosUpdate',
        data() {
            return {
                idDepartamento: 0,
                nombre: '',
                localidad: ''
            }
        },
        methods: {
            updateDepartamento() {
                let data = {
                    idDepartamento: parseInt(this.idDepartamento),
                    nombre: this.nombre,
                    localidad: this.localidad
                }
                
                departamentosService.updateDepartamento(data).then( response => {
                    Swal.fire(
                        'Editado',
                        'El departamento ha sido editado.',
                        'success'
                    );
                    console.log(response)
                    this.$router.push('/');
                }
                )
            },
            getDepartamento() {
                departamentosService.getDepartamento(this.$route.params.id).then(response => {
                    this.idDepartamento = response.idDepartamento
                    this.nombre = response.nombre
                    this.localidad = response.localidad
                })
            }
        },
        mounted() {
            this.getDepartamento()
        }
    }
</script>

<style>
    @import url(../assets/css/loader.css);
</style>