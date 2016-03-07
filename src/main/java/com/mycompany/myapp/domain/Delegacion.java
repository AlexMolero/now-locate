package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Delegacion.
 */
@Entity
@Table(name = "delegacion")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "delegacion")
public class Delegacion implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "localidad")
    private String localidad;

    @Column(name = "volumen_almacen")
    private Integer volumen_almacen;

    @Column(name = "calle")
    private String calle;

    @OneToMany(mappedBy = "delegacion_inicio")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Expedicion> expedicions = new HashSet<>();

    @OneToMany(mappedBy = "delegacion_fin")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Expedicion> expedicion_fins = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public Integer getVolumen_almacen() {
        return volumen_almacen;
    }

    public void setVolumen_almacen(Integer volumen_almacen) {
        this.volumen_almacen = volumen_almacen;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Set<Expedicion> getExpedicions() {
        return expedicions;
    }

    public void setExpedicions(Set<Expedicion> expedicions) {
        this.expedicions = expedicions;
    }

    public Set<Expedicion> getExpedicion_fins() {
        return expedicion_fins;
    }

    public void setExpedicion_fins(Set<Expedicion> expedicions) {
        this.expedicion_fins = expedicions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Delegacion delegacion = (Delegacion) o;
        return Objects.equals(id, delegacion.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Delegacion{" +
            "id=" + id +
            ", localidad='" + localidad + "'" +
            ", volumen_almacen='" + volumen_almacen + "'" +
            ", calle='" + calle + "'" +
            '}';
    }
}
