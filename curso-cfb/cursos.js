class Cursos{
    static cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', "RaspBerry", 'C#', 'Python']

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_cursos)=>{
        return this.cursos[i_cursos]
    }
    
    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos = []
    }

}

export default Cursos