package vvf.ufficioIV.applicativobadge.dto;

public class AppVersionDTO {
    
    private String appName;
    private String version;
    private String buildDate;
    private String codeName;

    public AppVersionDTO() {}

    public AppVersionDTO(String appName, String version, String buildDate, String codeName) {
        this.appName = appName;
        this.version = version;
        this.buildDate = buildDate;
        this.codeName = codeName;
    }

    public String getAppName() { return appName; }
    public void setAppName(String appName) { this.appName = appName; }

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }

    public String getBuildDate() { return buildDate; }
    public void setBuildDate(String buildDate) { this.buildDate = buildDate; }
    
    public String getCodeName() {
        return codeName;
    }
    public void setCodeName(String codeName) {
        this.codeName = codeName;
    }
}