const importAll = (requireContext) => requireContext.keys().map(requireContext);

const penteadosImages = importAll(require.context('../../assets/galeria-penteados', false, /\.jpg$/));



const servicosData = [
    {
        id: 1,
        servico: "cabelo",
        imagens: []
    },{
        id: 2,
        servico: "maquiagem",
        imagens: []
    },{
        id: 3,
        servico: "penteados",
        imagens: penteadosImages
    },{
        id: 4,
        servico: "design de sobrancelhas",
        imagens: []
    }
]
export default servicosData;