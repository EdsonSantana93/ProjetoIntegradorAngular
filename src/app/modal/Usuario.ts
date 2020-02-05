export class Usuario{
    public idUsuario: number; 
    public nome: string;
    public telefone: string;
    public email: string;
    public senha: string;

    public getIdUsuario(): number{
        return this.idUsuario;
    }

    public setIdUsuario(idUsuario: number): void{
        this.idUsuario = idUsuario;
    }

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getTelefone(): string{
        return this.telefone;
    }

    public setTelefone(telefone: string): void{
        this.telefone = telefone;
    }
    
    public getEmail(): string{
        return this.email;
    }

    public setEmail(email: string): void{
        this.email = email;
    }
    
    public getSenha(): string{
        return this.senha;
    }

    public setSenha(senha: string): void{
        this.senha = senha;
    }
}