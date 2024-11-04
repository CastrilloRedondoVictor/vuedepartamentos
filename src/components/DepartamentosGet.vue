<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Información de Departamento</h1>
        <div v-if="departamento" class="card">
            <div class="card-body">
                <h5 class="card-title">Detalles del Departamento</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: {{ departamento.idDepartamento }}</h6>
                <p class="card-text"><strong>Nombre:</strong> {{ departamento.nombre }}</p>
                <p class="card-text"><strong>Localidad:</strong> {{ departamento.localidad }}</p>
            </div>
        </div>
        <div v-else>
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import DepartamentosService from '@/services/DepartamentosService'

var departamentosService = new DepartamentosService();
export default {
    name: 'DepartamentosGet',
    data() {
        return {
            departamento: null
        }
    },
    methods: {
        getDepartamento() {
            departamentosService.getDepartamento(this.$route.params.id).then(response => {
                this.departamento = response;
            })
        }
    },
    mounted() {
        this.getDepartamento();
    }
}
</script>

<style scoped>
.container {
    max-width: 600px;
}

.card {
    border: 1px solid #007bff;
}

.card-title {
    color: #007bff;
}

.alert {
    text-align: center;
}
</style>
<style>
    @import url(../assets/css/loader.css);
</style>
