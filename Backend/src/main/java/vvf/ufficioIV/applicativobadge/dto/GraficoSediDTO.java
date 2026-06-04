package vvf.ufficioIV.applicativobadge.dto;

import java.util.ArrayList;
import java.util.List;

public class GraficoSediDTO {
    
    private List<String> labels;
    private List<Integer> values;

    public GraficoSediDTO() {
        this.labels = new ArrayList<>();
        this.values = new ArrayList<>();
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<Integer> getValues() {
        return values;
    }

    public void setValues(List<Integer> values) {
        this.values = values;
    }
    
    // Metodo di utilità per popolare facilmente le liste
    public void addData(String label, Integer value) {
        this.labels.add(label);
        this.values.add(value);
    }
}