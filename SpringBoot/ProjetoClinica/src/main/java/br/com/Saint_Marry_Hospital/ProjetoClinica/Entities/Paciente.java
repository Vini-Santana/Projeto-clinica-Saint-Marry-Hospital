package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "paciente_seq", allocationSize = 1)
    private Integer idPaciente;

    @NotBlank(message = "O nome é obrigatório")
    private String nome;

    @NotBlank(message = "O email é obrigatório")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "O cpf é obrigatório")
    @Column(unique = true)
    private String cpf;

    @OneToOne
    @JoinColumn(name = "fk_idUsuario", nullable = false, unique = true)
    private Usuario usuario;


    public Paciente(String nome, String email, String cpf, Usuario usuario, PerfilDeAcesso perfilDeAcesso) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.usuario = usuario;
    }

    public Paciente(){ }

    public Integer getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Integer idPaciente) {
        this.idPaciente = idPaciente;
    }

    public @NotBlank(message = "O nome é obrigatório") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "O nome é obrigatório") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "O email é obrigatório") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "O email é obrigatório") String email) {
        this.email = email;
    }

    public @NotBlank(message = "O cpf é obrigatório") String getCpf() {
        return cpf;
    }

    public void setCpf(@NotBlank(message = "O cpf é obrigatório") String cpf) {
        this.cpf = cpf;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario (Usuario usuario) {
        this.usuario = usuario;
    }

}
