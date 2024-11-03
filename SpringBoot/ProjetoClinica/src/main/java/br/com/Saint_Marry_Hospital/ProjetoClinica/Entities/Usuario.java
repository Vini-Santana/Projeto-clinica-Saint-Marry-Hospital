package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Usuario {

    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "usuario_seq", allocationSize = 1)
    private Integer idUsuarios;

    @NotBlank(message = "O email é obrigatório")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "A senha é obrigatória")
    private String senha;

    @ManyToOne
    @JoinColumn(name = "fk_idPerfilDeAcesso", nullable = false)
    private PerfilDeAcesso perfilDeAcesso;

    public Usuario() {}

    public Usuario(Integer idUsuarios, String email, String senha, PerfilDeAcesso perfilDeAcesso) {
        this.idUsuarios = idUsuarios;
        this.email = email;
        this.senha = senha;
        this.perfilDeAcesso = perfilDeAcesso;
    }

    public Integer getIdUsuarios() {
        return idUsuarios;
    }

    public void setIdUsuarios(Integer idUsuarios) {
        this.idUsuarios = idUsuarios;
    }

    public @NotBlank(message = "O email é obrigatório") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "O email é obrigatório") String email) {
        this.email = email;
    }

    public @NotBlank(message = "A senha é obrigatória") String getSenha() {
        return senha;
    }

    public void setSenha(@NotBlank(message = "A senha é obrigatória") String senha) {
        this.senha = senha;
    }

    public PerfilDeAcesso getPerfilDeAcesso() {
        return perfilDeAcesso;
    }

    public void setPerfilDeAcesso(PerfilDeAcesso perfilDeAcesso) {
        this.perfilDeAcesso = perfilDeAcesso;
    }
}
