# KTPM note
- Project-Seminar: chọn chủ đề và trả lời các câu hỏi (What, Why, How, ...).
- Project-Case Study: cô sẽ gửi 1 sản phẩm và test.
- Mid-term test: thi viết (hên xui)
- Final test: thi viết.

# Tester Fundamental

## [What is Software Testing? Introduction, Definition, Basics & Types](https://www.guru99.com/software-testing-introduction-importance.html)
  ### Introduction
  - Là phương pháp để kiểm tra liệu sản phẩm phần mềm thực tế có phù hợp với các yêu cầu.
  - Và để đảm bảo sản phẩm phần mềm không có khiếm khuyết hay lỗi nào.
  - Việc này liên quan đến sự thực thi của các thành phần của phần mềm/hệ thống bằng cách sử dụng công cụ thủ công hay tự động để tính toán một hoạt nhiều các thành phần mà nó quan tâm.
  - Mục đích của Software Testing là tìm ra (identify) lỗi, khoảng trống (gaps), hoặc bất cứ các yêu cầu bị bỏ lỡ so với yêu cầu thực tế.
  ### Definition
  - Software testing definition as a White Box and Black Box Testing. In simple terms, Software Testing means the Verification of Application Under Test (AUT). This Software Testing course introduces testing software to the audience and justifies the importance of software testing.
  ### Benefits
  - Cost-Effective
  - Security
  - Product quality
  - Customer Satisfaction
  ### Types:
   #### Functional Testing
  + *Unit Testing*: Kiểm thử các đơn vị **nhỏ nhất** trong mã nguồn như hàm, module,...
    **Lời khuyên cho Tester khi thực hiện unit test**:
      *Viết unit test trước khi viết mã nguồn*: Unit test nên được viết trước khi viết mã nguồn, vì nó giúp đảm bảo rằng mã nguồn được viết theo như thiết  kế.
      *Viết unit test cho từng đơn vị mã nguồn*: Mỗi đơn vị mã nguồn nên được kiểm tra bằng một hoặc nhiều unit test.
      *Giữ unit test ngắn gọn và dễ hiểu*: Unit test nên ngắn gọn và dễ hiểu, để dễ dàng bảo trì và cập nhật.
      *Tự động hóa việc thực thi unit test*: Việc thực thi unit test nên được tự động hóa để tiết kiệm thời gian và công sức.
  + *Integration Testing*: là một kỹ thuật kiểm thử phần mềm nhằm kiểm tra sự **tương thích** và **tương tác** giữa các module, thành phần hoặc hệ thống khác nhau trong một ứng dụng phần mềm
  + *Smoke*: là một kỹ thuật kiểm thử phần mềm nhằm kiểm tra các **chức năng cơ bản** và **quan trọng nhất** của một ứng dụng phần mềm để đảm bảo rằng ứng dụng có thể hoạt động được.
  + *AUT (Application Under test)*: là **giai đoạn cuối cùng** của quá trình kiểm thử phần mềm **trước khi phần mềm được phát hành chính thức**. UAT được thực hiện bởi **người dùng cuối (end-user)** hoặc đại diện của họ để đảm bảo rằng phần mềm đáp ứng được các yêu cầu và mong đợi của họ.
    **Mục đích của UAT**:
      Kiểm tra xem phần mềm có đáp ứng được các yêu cầu kinh doanh của người dùng cuối hay không.
      Đảm bảo rằng người dùng cuối có thể sử dụng phần mềm một cách dễ dàng và hiệu quả.
      Phát hiện các lỗi hoặc vấn đề về khả năng sử dụng của phần mềm.
      Thu thập phản hồi từ người dùng cuối để cải thiện phần mềm.
  + *Localization*: là kiểm thử đảm bảo sản phẩm phù hợp với thị trường nội địa bao gồm các hoạt động:
      *Kiểm tra bản dịch*: xem bản dịch có dễ hiểu và phù hợp hay không.
      *Kiểm tra định dạng*: xem định dạng có phù hợp với các tiêu chuẩn hay không.
      *Kiểm tra chức năng*: xem chức năng có phù hợp và hoạt động đúng với thị trường mục tiêu hay không.
      *Kiểm tra khả năng sử dụng*
      *Kiểm tra hiệu suất*
  + *Globalization*: Kiểm thử toàn cầu là kiểm thử đảm bảo phần mềm có thể hoạt động hiệu quả ở các môi trường khác nhau trên toàn cầu, bao gồm các hoạt động:
      *Kiểm tra ngôn ngữ*
      *Kiểm tra khu vực địa lý.*
      *Kiểm tra múi giờ.*
      *Kiểm tra đơn vị tiền tệ*
      *Kiểm tra định dạng ngày tháng.*
      *Kiểm tra khả năng sử dụng.*
      *Kiểm tra năng suất*
  + *Interoperability*: Kiểm tra tính tương tác giữa phần mềm với các phần mềm hoặc hệ thống khác. Mục đích là đảm bảo hệ thống hoặc thành phần của phần mềm có thể chia sẻ dữ liệu, thực hiện giao dịch hoặc hoàn thành các nhiệm vụ chung một cách trơn tru. Các bước bao gồm
    Kiểm tra giao thức.
    Kiểm tra dữ liệu.
    Kiểm tra chức năng.
    Kiểm tra hiệu suất.
    Kiểm tra bảo mật.
   #### Non-Functional Testing or Performance Testing
  + *Performance*: là một loại kiểm thử phi chức năng (Non-Functional Testing) tập trung vào việc **đo lường** và **đánh giá hiệu suất của phần mềm** dưới tải trọng khác nhau. Mục tiêu của Performance Testing là đảm bảo phần mềm hoạt động **ổn định**, **mượt mà** và **đáp ứng được thời gian phản hồi mong đợi** ngay cả khi có nhiều người dùng cùng sử dụng.
  + *Edurance*: **Kiểm thử độ bền**, là một loại kiểm thử phi chức năng tập trung vào việc đánh giá khả năng hoạt động liên tục của phần mềm trong một khoảng thời gian dài (24h, 48h, 72h,...) dưới tải trọng cao. Mục đích của endurance testing là để đảm bảo rằng phần mềm có thể **hoạt động ổn định**, **không bị lỗi** và **đáp ứng được nhu cầu sử dụng trong thời gian dài**.
  + *Load*: **Kiểm thử tải** là một loại kiểm thử phi chức năng (Non-functional testing) tập trung vào việc đo lường và **đánh giá** hiệu suất của phần mềm dưới tải trọng khác nhau. Mục tiêu của load testing là để đảm bảo phần mềm hoạt động **ổn định**, **mượt mà** và **đáp ứng được thời gian phản hồi** mong đợi ngay cả khi có nhiều người dùng cùng sử dụng.
  + *Volume*: **Kiểm thử khối lượng** là một loại kiểm thử phi chức năng nhằm đánh giá khả năng của phần mềm trong việc **xử lý một lượng lớn dữ liệu**. Mục đích của volume testing là để đảm bảo rằng phần mềm có thể hoạt động **ổn định**, **hiệu quả** và **đáp ứng** được các yêu cầu về hiệu suất khi có **lượng lớn dữ liệu được xử lý**.
  + *Scalability*: Kiểm tra mức độ có thể phát triển của phần mềm.
  + *Usability*: Kiểm tra khả năng sử dụng của người dùng (bằng cách phỏng vấn, làm khảo sát,...) thường được sử dụng ở giai đoạn thiết kế, giai đoạn phát triển, giai đoạn thử nghiệm.
   #### Maintenance (Regression and Maintenance)
  + *Regression*: Kiểm thử quy hồi là kiểm tra xem các bản cập nhật hay thay đổi của phần mềm có lỗi hay có ảnh hưởng gì đến phần mềm hay không?
  + *Maintenance*: Kiểm thử bảo trì được thực hiện sau khi phần mềm được phát hành và đưa vào sử dụng. Mục đích là đảm bảo phần mềm vẫn hoạt động chính xác, hiệu quả và đáp ứng đầy đủ các nhu cầu của người dùng.
  ### Summary of ST Basic:
  - Kiểm thử rất quan trọng bởi vì lỗi phần mềm sẽ gây thiết hại lớn về tiền và rất nguy hiểm.
  - Lý do quan trọng cho việc kiểm thử: tiết kiệm chi phí, bảo mật, chất lượng sản phẩm, và trãi nghiệm người dùng
  - Có 3 loại test: functional, non-functional, maintenance.
  - Các important strategies: unit test, integration test, validation test, system test (AUT)
  
## [Software Testing as a Career Path (Skills, Salary, Growth)](https://www.guru99.com/software-testing-career-complete-guide.html)
  ### Skills
    - Non-Technical Skills 
      + Analytical skills
      + Communication skills
      + Time Management and Organization Skills (khả năng quản lý)
      + Great attitude
      + Passion.
    - Technical Skills
      + Basic knowledge of Database/SQL (https://www.guru99.com/sql.html)
      + Basic of Linux commands (https://www.guru99.com/unix-linux-tutorial.html)
      + Kiến thức và trãi nghiệm về các công cụ test (
          https://www.guru99.com/test-management.html, 
          https://www.guru99.com/testlink-tutorial-complete-guide.html
        )
      + Kiến thức và trãi nghiệm về các công cụ theo dõi lỗi (Defect Tracking Tool) (
          https://www.guru99.com/defect-life-cycle.html, 
          https://www.guru99.com/hp-alm-free-tutorial.html, 
          https://www.guru99.com/bugzilla-tutorial-for-beginners.html, 
          https://www.guru99.com/jira-tutorial-a-complete-guide-for-beginners.html
        )
      + Kiến thức và trãi nghiệm về các công cụ tự động (https://www.guru99.com/best-automation-testing-tools.html)
  ### Salary (https://vietnamsalary.careerviet.vn/detail/Software-Tester-kw)
  ### Growth
  Software Testing -> Selenium -> Jmeter -> Test Link -> Apply for Permanent Jobs
                    |           |         |            |
                    v           v         v            v
                    ---> Apply for Freelancing Jobs <---
  Notes:
    Selenium:Automation tool
    Jmeter: Performance Testing tool
    Test Link: Test Management Tool
  ### Career Path
    1. QA Analyst (Fresher)
    2. Sr. QA Analyst (2-3 years’ experience)
    3. QA Team Coordinator (5-6 years’ experience)
    4. Test Manager (8-11 years’ experience)
    5. Senior Test Manager (14+ experience)
## 7 Software Testing Principles: **Learn with Examples**
  ### Exhaustive testing is not possible: **Không thể kiểm soát hết lỗi**
  ### Defect clustering: **Phân loại lỗi theo cụm**
  ### Pesticide paradox: **Vòng đời của thuốc trừ sâu**
  + Các lỗi giống như sâu bệnh vậy, nếu ta cứ dùng 1 cách để debug 1 lỗi, thì sẽ rất khó để tìm ra một new defects. Vì vậy các phương pháp cần phải được **reviewed & revised**.
  + Một Tester không nên chỉ dựa dẫm vào **1 techniques** có sẵn, ta cần phải phát triển **các methods khác nhau** để việc **test more effective**.
  ### Testing shows presence of defects **Việc kiểm thử cho thấy sự hiện diện của defects**
  ### Absence of errors fallacy **Không có lỗi là ngụy biện**
  ### Early testing: **Test sớm**
  ### Testing is context dependent: **Việc kiểm thử tùy thuộc vào ngữ cảnh**
    + Tất cả các phần mềm đều khác nhau, vì vậy ta cần tìm hiểu, và sử dụng các approach, methodologies, techniques, và nhiều loại test khác nhau sao cho phù hợp với ứng dụng.
    + For instance testing, any POS system at a retail store will be different than testing an ATM machine.
## [What is V Model in Software Testing? Learn with SDLC & STLC Example](https://www.guru99.com/v-model-software-testing.html)
## [STLC - Software Testing Life Cycle Phases & Entry, Exit Criteria](https://www.guru99.com/software-testing-life-cycle.html)
  + **Software Testing Life Cycle** là một chuỗi các hoạt động độc lập trong quá trình Kiểm thử nhằm đảm bảo được mục tiêu chất lượng của phần mềm.
  + STLC bao gồm **verification** và **validation** activities.
  + KHông như mọi người nghĩ, Kiểm thử phần mềm không phải là 1 hoạt động đơn lẻ/độc lập, mà nó bao gồm một chuỗi các sự kiện có phương pháp cụ thể, nhằm **chứng nhận** sản phẩm của các bạn.
## STLC phases
  Gồm 6 giai đoạn chính:
  + ***Requirements Analysis***
  + ***Test Planning***
  + ***Test Case Development***
  + ***Environment Setup***
  + ***Test Excution***
  + ***Test Cycle Closure***
  Mỗi giai đoạn đều có **Entry and Exit criteria** và **Deliverables**
## Entry and Exit Criteria
  ### Entry Criteria (Tiêu chí đầu vào): 
    Entry Criteria đưa ra các mục tiên quyết phải được hoàn thành trước khi thử nghiệm có thể bắt đầu.
  ### Exit Criteria (Tiêu chuẩn đầu ra):
    Exit Criteria quy định mục phải được hoàn thành trước khi việc kiểm thử được hoàn thành.
  [STLC in Software Testing](https://www.youtube.com/watch?v=Dq5IYYqnnGQ&embeds_referring_euri=https%3A%2F%2Fwww.guru99.com%2F&feature=emb_imp_woyt)
