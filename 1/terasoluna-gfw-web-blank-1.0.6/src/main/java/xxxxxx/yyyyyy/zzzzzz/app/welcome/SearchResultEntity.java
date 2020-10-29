package xxxxxx.yyyyyy.zzzzzz.app.welcome;

import java.io.Serializable;
import java.time.LocalDate;

public class SearchResultEntity implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long orderNum;

    private String voucherStatus;

    private LocalDate wfUpdate;

    private String orderType;

    private String orbName;

    private String orderCharger;

    private String orderDeparter;

    private String vendor;

    private LocalDate orderDate;
    
    private Boolean acceptFlag;
    
    private Boolean fixFlag;
    
    private Boolean takebackFlag;
    
    private Boolean reuseFlag;
    
    private Boolean delFlag;
    
    public Long getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Long orderNum) {
        this.orderNum = orderNum;
    }
    
    public String getVoucherStatus() {
        return voucherStatus;
    }

    public void setVoucherStatus(String voucherStatus) {
        this.voucherStatus = voucherStatus;
    }
    
    public LocalDate getWfUpdate() {
        return wfUpdate;
    }

    public void setWfUpdate(LocalDate wfUpdate) {
        this.wfUpdate = wfUpdate;
    }
    
    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }
    
    public String getOrbName() {
        return orbName;
    }

    public void setOrbName(String orbName) {
        this.orbName = orbName;
    }
    
    public String getOrderCharger() {
        return orderCharger;
    }

    public void setOrderCharger(String orderCharger) {
        this.orderCharger = orderCharger;
    }
    
    public String getOrderDeparter() {
        return orderDeparter;
    }

    public void setOrderDeparter(String orderDeparter) {
        this.orderDeparter = orderDeparter;
    }
    
    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }
    
    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }
    
    public Boolean getAcceptFlag() {
        return acceptFlag;
    }

    public void setAcceptFlag(Boolean acceptFlag) {
        this.acceptFlag = acceptFlag;
    }
    
    public Boolean getFixFlag() {
        return fixFlag;
    }

    public void setFixFlag(Boolean fixFlag) {
        this.fixFlag = fixFlag;
    }
    
    public Boolean getTakebackFlag() {
        return takebackFlag;
    }

    public void setTakebackFlag(Boolean takebackFlag) {
        this.takebackFlag = takebackFlag;
    }
    
    public Boolean getReuseFlag() {
        return reuseFlag;
    }

    public void setReuseFlag(Boolean reuseFlag) {
        this.reuseFlag = reuseFlag;
    }
    
    public Boolean getDelFlag() {
        return delFlag;
    }

    public void setDelFlag(Boolean delFlag) {
        this.delFlag = delFlag;
    }
}