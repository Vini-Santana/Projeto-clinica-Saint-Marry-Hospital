package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idUsuarios;
    @NotBlank(message = "O login é obrigatório")
    @Column(unique = true)
    private String email;
    @NotBlank(message = "A senha é obrigatória")
    @Column(unique = true)
    private String senha;

    public Usuario() {}

    public Usuario(Integer idUsuarios, String email, String senha) {
        this.idUsuarios = idUsuarios;
        this.email = email;
        this.senha = senha;
    }

    public Integer getIdUsuarios() {
        return idUsuarios;
    }

    public void setIdUsuarios(Integer idUsuarios) {
        this.idUsuarios = idUsuarios;
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
}
