package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "medico_seq", allocationSize = 1)
    private Integer idMedico;

    @NotBlank(message = "O nome é obrigatório")
    @Column(unique = false)
    private String nome;

    @NotBlank(message = "O email é obrigatório")
    @Column(unique = true)
    private String email;

    @OneToOne
    @JoinColumn(name = "fk_idUsuario", nullable = false, unique = true)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "fk_idEspecialidade", nullable = false)
    private Especialidade especialidade;

    public Medico() { }

    public Medico(String nome, String email, String senha, String cpf, Usuario usuario,  Especialidade especialidade) {
        this.nome = nome;
        this.email = email;
        this.usuario = usuario;
        this.especialidade = especialidade;
    }

    public Integer getIdMedico() {
        return idMedico;
    }

    public void setIdMedico(Integer idMedico) {
        this.idMedico = idMedico;
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

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Especialidade getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(Especialidade especialidade) {
        this.especialidade = especialidade;
    }
}
