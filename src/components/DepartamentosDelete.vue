<script>
    import Swal from 'sweetalert2';
    import DepartamentosService from '@/services/DepartamentosService';

    var departamentosService = new DepartamentosService()

    export default {
        name: 'DepartamentosDelete',
        methods: {
            deleteDepartamento(id) {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: 'No podrás revertir esto una vez eliminado.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        departamentosService.deleteDepartamento(id)
                            .then(() => {
                                Swal.fire(
                                    'Eliminado',
                                    'El departamento ha sido eliminado.',
                                    'success'
                                );
                                this.$router.push('/')
                            })
                            .catch((error) => {
                                console.error("Error eliminando el departamento:", error);
                                Swal.fire(
                                    'Error',
                                    'Hubo un problema eliminando el departamento.',
                                    'error'
                                );
                            });
                    }
                });
            }
        },
        mounted() {
            this.deleteDepartamento(this.$route.params.id)
        }
    }
</script>
