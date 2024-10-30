package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idUsuarios;
    private String login;
    private String senha;

    public Usuarios() {}

    public Usuarios(Integer idUsuarios, String login, String senha) {
        this.idUsuarios = idUsuarios;
        this.login = login;
        this.senha = senha;
    }

    public Integer getIdUsuarios() {
        return idUsuarios;
    }

    public void setIdUsuarios(Integer idUsuarios) {
        this.idUsuarios = idUsuarios;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
