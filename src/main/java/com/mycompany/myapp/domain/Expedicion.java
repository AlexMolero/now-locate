package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import java.time.LocalDate;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Expedicion.
 */
@Entity
@Table(name = "expedicion")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "expedicion")
public class Expedicion implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "fecha_inicio")
    private LocalDate fecha_inicio;

    @Column(name = "fecha_entrega")
    private LocalDate fecha_entrega;

    @Column(name = "frigorifico")
    private Boolean frigorifico;

    @Column(name = "temp_max")
    private Integer temp_max;

    @Column(name = "temp_min")
    private Integer temp_min;

    @Column(name = "descripcion")
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "camion_id")
    private Camion camion;

    @ManyToOne
    @JoinColumn(name = "delegacion_inicio_id")
    private Delegacion delegacion_inicio;

    @ManyToOne
    @JoinColumn(name = "delegacion_fin_id")
    private Delegacion delegacion_fin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(LocalDate fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public LocalDate getFecha_entrega() {
        return fecha_entrega;
    }

    public void setFecha_entrega(LocalDate fecha_entrega) {
        this.fecha_entrega = fecha_entrega;
    }

    public Boolean getFrigorifico() {
        return frigorifico;
    }

    public void setFrigorifico(Boolean frigorifico) {
        this.frigorifico = frigorifico;
    }

    public Integer getTemp_max() {
        return temp_max;
    }

    public void setTemp_max(Integer temp_max) {
        this.temp_max = temp_max;
    }

    public Integer getTemp_min() {
        return temp_min;
    }

    public void setTemp_min(Integer temp_min) {
        this.temp_min = temp_min;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Camion getCamion() {
        return camion;
    }

    public void setCamion(Camion camion) {
        this.camion = camion;
    }

    public Delegacion getDelegacion_inicio() {
        return delegacion_inicio;
    }

    public void setDelegacion_inicio(Delegacion delegacion) {
        this.delegacion_inicio = delegacion;
    }

    public Delegacion getDelegacion_fin() {
        return delegacion_fin;
    }

    public void setDelegacion_fin(Delegacion delegacion) {
        this.delegacion_fin = delegacion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Expedicion expedicion = (Expedicion) o;
        return Objects.equals(id, expedicion.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Expedicion{" +
            "id=" + id +
            ", fecha_inicio='" + fecha_inicio + "'" +
            ", fecha_entrega='" + fecha_entrega + "'" +
            ", frigorifico='" + frigorifico + "'" +
            ", temp_max='" + temp_max + "'" +
            ", temp_min='" + temp_min + "'" +
            ", descripcion='" + descripcion + "'" +
            '}';
    }
}
