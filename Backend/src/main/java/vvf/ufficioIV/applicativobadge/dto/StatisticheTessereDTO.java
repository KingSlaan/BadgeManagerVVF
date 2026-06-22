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
        private int occupate;
        private int libere;
        private int indisponibili;
        private int nd;

        public Generale() {}

        public int getTotali() { return totali; }
        public void setTotali(int totali) { this.totali = totali; }

        public int getOccupate() { return occupate; }
        public void setOccupate(int occupate) { this.occupate = occupate; }

        public int getLibere() { return libere; }
        public void setLibere(int libere) { this.libere = libere; }

        public int getIndisponibili() { return indisponibili; }
        public void setIndisponibili(int indisponibili) { this.indisponibili = indisponibili; }

        public int getNd() { return nd; }
        public void setNd(int nd) { this.nd = nd; }
    }
}