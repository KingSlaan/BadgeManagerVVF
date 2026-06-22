package vvf.ufficioIV.applicativobadge.dto;

public class AppVersionDTO {
    
    private String appName;
    private String version;
    private String buildDate;
    private String codename;

    public AppVersionDTO() {}

    public AppVersionDTO(String appName, String version, String buildDate, String codename) {
        this.appName = appName;
        this.version = version;
        this.buildDate = buildDate;
        this.codename = codename;
    }

    public String getAppName() { return appName; }
    public void setAppName(String appName) { this.appName = appName; }

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }

    public String getBuildDate() { return buildDate; }
    public void setBuildDate(String buildDate) { this.buildDate = buildDate; }
    
    public String getCodename() {
        return codename;
    }
    public void setCodename(String codename) {
        this.codename = codename;
    }
}