package vvf.ufficioIV.applicativobadge.dto;

public class StatisticheTessereDTO {
    
    private Generale generale;

    public StatisticheTessereDTO() {
        this.generale = new Generale();
    }

    public Generale getGenerale() {
        return generale;
    }

    public void setGenerale(Generale generale) {
        this.generale = generale;
    }

    // Classe innestata per mappare esattamente la struttura JSON richiesta
    public static class Generale {
        private int totali;
        private int assegnati;
        private int nonAssegnati;
        private int inutilizzabili;

        public Generale() {}

        public int getTotali() { return totali; }
        public void setTotali(int totali) { this.totali = totali; }

        public int getAssegnati() { return assegnati; }
        public void setAssegnati(int assegnati) { this.assegnati = assegnati; }

        public int getNonAssegnati() { return nonAssegnati; }
        public void setNonAssegnati(int nonAssegnati) { this.nonAssegnati = nonAssegnati; }

        public int getInutilizzabili() { return inutilizzabili; }
        public void setInutilizzabili(int inutilizzabili) { this.inutilizzabili = inutilizzabili; }
    }
}