export class FaleConosco {
    
    private idFaleConosco: number;
    private nome: string;
    private sobrenome: string;
    private telefone: string;
    private mensagem: string;

    public getIdFaleConosco(): number{
        return this.idFaleConosco;
    }
    public setIdComentario(idFaleConosco: number): void{
        this.idFaleConosco = idFaleConosco;
    }

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getSobrenome(): string{
        return this.sobrenome;
    }
    public setSobrenome(sobrenome: string): void{
        this.sobrenome = sobrenome;
    }

    public getTelefone(): string{
        return this.telefone;
    }
    public setTelefone(telefone: string): void{
        this.telefone = telefone;
    }

    public getMensagem(): string{
        return this.mensagem;
    }
    public setMensagem(mensagem: string): void{
        this.mensagem = mensagem;
    }


}