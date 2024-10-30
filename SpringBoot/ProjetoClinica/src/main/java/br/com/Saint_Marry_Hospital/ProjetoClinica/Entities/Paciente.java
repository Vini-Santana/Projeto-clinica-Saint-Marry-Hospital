package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idPaciente;
    private String nome;
    private String email;
    private String senha;
    private String cpf;

    public Paciente(Integer idPaciente, String nome, String email, String senha, String cpf) {
        this.idPaciente = idPaciente;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }

    public Paciente(){ }

    public Integer getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Integer idPaciente) {
        this.idPaciente = idPaciente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
