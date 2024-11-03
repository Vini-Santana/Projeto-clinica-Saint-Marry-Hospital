package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "telefone_seq", allocationSize = 1)
    private Integer idTelefone;

    @NotBlank(message = "O numero é obrigatório")
    @Column(unique = true)
    private String numero;

    private Integer ddd;

    @ManyToOne
    @JoinColumn(name = "fk_idPaciente", nullable = false)
    private Paciente paciente;

    public Telefone() {}

    public Telefone(Integer idTelefone, String numero, Integer ddd, Paciente paciente) {
        this.idTelefone = idTelefone;
        this.numero = numero;
        this.ddd = ddd;
        this.paciente = paciente;
    }

    public Integer getIdTelefone() {
        return idTelefone;
    }

    public void setIdTelefone(Integer idTelefone) {
        this.idTelefone = idTelefone;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(@NotBlank(message = "O numero é obrigatório") String numero) {
        this.numero = numero;
    }

    public Integer getDdd() {
        return ddd;
    }

    public void setDdd(@NotBlank(message = "O ddd é obrigatório") Integer ddd) {
        this.ddd = ddd;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }
}
