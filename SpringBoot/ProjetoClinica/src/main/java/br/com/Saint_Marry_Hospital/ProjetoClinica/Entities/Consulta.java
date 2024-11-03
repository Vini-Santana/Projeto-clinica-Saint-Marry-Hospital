package br.com.Saint_Marry_Hospital.ProjetoClinica.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

@Entity
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "consulta_seq", allocationSize = 1)
    private Integer idConsulta;

    @NotNull
    @Column(unique = true)
    private LocalDateTime horario;

    @ManyToOne
    @JoinColumn(name = "fk_idPaciente", nullable = false)
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "fk_idMedico", nullable = false)
    private Medico medico;

    public Consulta() {}

    public Consulta(LocalDateTime horario, Paciente paciente, Medico medico) {
        this.horario = horario;
        this.paciente = paciente;
        this.medico = medico;
    }

    public Integer getIdConsulta() {
        return idConsulta;
    }

    public void setIdConsulta(Integer idConsulta) {
        this.idConsulta = idConsulta;
    }

    public @NotNull LocalDateTime getHorario() {
        return horario;
    }

    public void setHorario(@NotNull LocalDateTime horario) {
        this.horario = horario;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public Medico getMedico() {
        return medico;
    }

    public void setMedico(Medico medico) {
        this.medico = medico;
    }
}
