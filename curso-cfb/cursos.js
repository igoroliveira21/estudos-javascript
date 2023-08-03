const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', "RaspBerry", 'C#', 'Python']

// const getTodosCursos = ( ) =>{
//     return cursos
// }

export default function getTodosCursos () {
    return cursos
}

export function getCurso (i_curso) {
    return cursos[i_curso]
}

export {cursos}
