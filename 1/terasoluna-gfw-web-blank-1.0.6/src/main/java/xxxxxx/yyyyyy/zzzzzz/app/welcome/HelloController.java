package xxxxxx.yyyyyy.zzzzzz.app.welcome;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.swing.filechooser.FileSystemView;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HelloController {

    private static final Logger logger = LoggerFactory
            .getLogger(HelloController.class);
    
    static List<SearchResultEntity> arrSearchRst1 = new ArrayList<SearchResultEntity>(); 
    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
    public String home(Locale locale, Model model) {
        logger.info("Welcome home! The client locale is {}.", locale);

        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.LONG, locale);

        String formattedDate = dateFormat.format(date);

        model.addAttribute("serverTime", formattedDate);

        return "welcome/home";
    }
    
    /**
     * Shows the poc4
     * @return
     */
    @RequestMapping(value="poc4", method = {RequestMethod.GET, RequestMethod.POST })
    public String poc4() {
        //return "login/form";
        return "welcome/poc4";
    }    
    /**
     * Shows the poc1
     * @return
     */
    @RequestMapping(value="poc1", method = {RequestMethod.GET, RequestMethod.POST })
    public String poc1() {
        //return "login/form";
        return "welcome/poc1";
    }
    
    /**
     * Shows the poc2
     * @return
     */
    @RequestMapping(value="poc2", method = {RequestMethod.GET, RequestMethod.POST })
    public String poc2() {
        //return "login/form";
        return "welcome/poc2";
    }
    
    /**
     * Shows the poc3
     * @return
     */
//    @RequestMapping(value="poc3", method = {RequestMethod.GET, RequestMethod.POST })
//    public String poc3() {
//        //return "login/form";
//        return "welcome/poc3";
//    }
    
    /**
     * Shows the poc3
     * @return
     */
    @RequestMapping(value="poc3", method = {RequestMethod.GET, RequestMethod.POST })
    public String poc3(Model model) {
        
        List<SearchResultEntity> arrSearchRst = new ArrayList<SearchResultEntity>();       
        
        for(int i = 0; i < 200; i++) {
            SearchResultEntity searchRst = new SearchResultEntity();
            searchRst.setOrderNum((long) (2020000000 + i));
            searchRst.setWfUpdate(LocalDate.now());
            searchRst.setOrbName("○○○○○○○○○○○○○○製品業務委託契約の件");
            searchRst.setOrderDeparter("情報システム部事業支援セクションネットワークエンターテインメントユニットチーム");
            searchRst.setVendor("○○○○○○○株式会社");
            searchRst.setOrderDate(LocalDate.now());

            if(i%3 == 0) {
                searchRst.setVoucherStatus("一時保存");
                searchRst.setOrderType("開発委託・宣伝");
                searchRst.setOrderCharger("発注 二郎");
                searchRst.setAcceptFlag(true);
                searchRst.setFixFlag(true);
                searchRst.setTakebackFlag(true);
                searchRst.setReuseFlag(true);
                searchRst.setDelFlag(true);
            } else if(i%7 == 0) {
                searchRst.setVoucherStatus("差し戻し");
                searchRst.setOrderType("開発委託・宣伝");
                searchRst.setOrderCharger("発注 三郎");
                searchRst.setAcceptFlag(false);
                searchRst.setFixFlag(false);
                searchRst.setTakebackFlag(false);
                searchRst.setReuseFlag(false);
                searchRst.setDelFlag(false);
            } else if(i%7 == 3) {
                searchRst.setVoucherStatus("承認・決裁待ち");
                searchRst.setOrderType("月額固定費");
                searchRst.setOrderCharger("発注 四郎");
                searchRst.setAcceptFlag(true);
                searchRst.setFixFlag(false);
                searchRst.setTakebackFlag(true);
                searchRst.setReuseFlag(false);
                searchRst.setDelFlag(true);
            } else if(i%11 == 0) {
                searchRst.setVoucherStatus("決裁済み");
                searchRst.setOrderType("一般購買");
                searchRst.setOrderCharger("発注 五郎");
                searchRst.setAcceptFlag(false);
                searchRst.setFixFlag(true);
                searchRst.setTakebackFlag(false);
                searchRst.setReuseFlag(true);
                searchRst.setDelFlag(false);
            } else {
                searchRst.setVoucherStatus("否決");
                searchRst.setOrderType("開発委託・宣伝");
                searchRst.setOrderCharger("発注 太郎");
                searchRst.setAcceptFlag(false);
                searchRst.setFixFlag(true);
                searchRst.setTakebackFlag(false);
                searchRst.setReuseFlag(true);
                searchRst.setDelFlag(true);
            }
            
            arrSearchRst.add(searchRst);
            arrSearchRst1.add(searchRst);
        }      
        model.addAttribute("searchResult", arrSearchRst);
        return "welcome/poc3";
    }

	@RequestMapping(value = "/download", method = {RequestMethod.GET,RequestMethod.POST})
	public void downloadFile(HttpServletResponse response) throws FileNotFoundException {
		//处理文件：
		File desktopDir = FileSystemView.getFileSystemView() .getHomeDirectory();

		String desktopPath = desktopDir.getAbsolutePath();
	    String fileName = desktopPath+"/1.csv";	        	    	    
	    File file = new File(fileName);
        response.reset();         //清楚空格等操作
        response.resetBuffer();
        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型   
        response.setContentType("multipart/form-data");   
        response.setCharacterEncoding("UTF-8");
        //2.设置文件头：最后一个参数是设置下载文件名(假如我们叫a.pdf)   
        //String fileName = URLEncoder.encode(atta.getFileName(), "UTF-8");
        //response.setHeader("Content-Disposition", "attachment;fileName="+"a"+".csv");  
        //String string = new String( "中文".getBytes("gbk"), "ISO8859-1" );
        response.addHeader("Content-Disposition", "attachment;filename="+"downloadFile"+".csv");

        ServletOutputStream out;
        try {     
            BufferedWriter bw = new BufferedWriter(new FileWriter(file)); // 附加
           // FileInputStream inputStream = new FileInputStream(file);
            //out = response.getOutputStream();
            // 添加新的数据行
			if (arrSearchRst1 != null && !arrSearchRst1.isEmpty()) {
				bw.write("発注番号"+",");
				bw.write("伝票状況"+",");
				bw.write("WF更新日"+",");
				bw.write("発注タイプ"+",");
				bw.write("件名"+",");
				bw.write("発注担当者"+",");
				bw.write("発注担当部署"+",");
				bw.write("仕入先"+",");
				bw.write("注文日"+",");
				bw.write("受入"+",");
				bw.write("修正"+",");
				bw.write("取戻"+",");
				bw.write("再利用"+",");
				bw.newLine();
				for ( SearchResultEntity data : arrSearchRst1) {
					
					bw.write(data.getOrderNum().toString()+",");
					bw.write(data.getVoucherStatus()+",");
					bw.write(data.getWfUpdate()+",");
					bw.write(data.getOrderType()+",");
					bw.write(data.getOrbName()+",");
					bw.write(data.getOrderCharger()+",");
					bw.write(data.getOrderDeparter()+",");
					bw.write(data.getVendor()+",");
					bw.write(data.getOrderDate()+",");
					bw.write(data.getAcceptFlag()+",");
					bw.write(data.getFixFlag()+",");
					bw.write(data.getTakebackFlag()+",");
					bw.write(data.getReuseFlag()+",");
					bw.write(data.getDelFlag()+",");				
		            bw.newLine(); 
                }
            FileInputStream inputStream = new FileInputStream(file);
            //3.通过response获取ServletOutputStream对象(out)
            out = response.getOutputStream();
            logger.info("out:"+out.toString());
            int b = 0;
            byte[] buffer = new byte[7];
            while (b != -1){
                b = inputStream.read(buffer);
                //4.写到输出流(out)中
                out.write(buffer,0,b);
            }
            bw.newLine(); 
            bw.close();
            
            inputStream.close();
        
            out.close();
            out.flush();
            out.close();     
          } }catch (FileNotFoundException e) { 
            // File对象的创建过程中的异常捕获
            e.printStackTrace(); 
          } catch (IOException e) { 
            // BufferedWriter在关闭对象捕捉异常
            e.printStackTrace(); 
          }     
	}

}
