const duLieuBanDau = [
    {
        maHS: "ma2025001", 
        hoTen: "Nguyễn Văn An", 
        lopHoc: "10A1", 
        diemTB: 9.2, 
        hanhKiem: "Tốt"
    },

    {
        maHS: "ma2025002", 
        hoTen: "Trần Thị Bình", 
        lopHoc: "10A1", 
        diemTB: 7.8, 
        hanhKiem: "Khá"
    },

    {
        maHS: "ma2025003", 
        hoTen: "Lê Văn Cường", 
        lopHoc: "11B2", 
        diemTB: 5.5, 
        hanhKiem: "Trung bình"
    },

    {
        maHS: "ma2025004", 
        hoTen: "Phạm Thu Hà", 
        lopHoc: "10A1", 
        diemTB: 8.8, 
        hanhKiem: "Tốt"
    },

    {
        maHS: "ma2025005", 
        hoTen: "Vũ Minh Đức", 
        lopHoc: "11B2", 
        diemTB: 4.1, 
        hanhKiem: "Yếu"
    }
];
        const layNamHienTai = () => new Date().getFullYear();

        const quanLyTruongHoc = {
            danhSach : [],
            soLuongHocSinhNumber: 0,

            khoiTao: function (data) {
                // sửa
                for(let item of data){
                    this.danhSach.push(item);
                }
                this.soLuongHocSinhNumber += data.length;
                
            },

            themHocSinh: function(hocSinh){
                this.soLuongHocSinhNumber++; 
                const soThuTu = String(this.soLuongHocSinhNumber).padStart(3, '0');
                const maHsobj = {
                    maHS : "ma" + layNamHienTai() + soThuTu   
                }
                const newHocSinh = {...maHsobj,...hocSinh};
                this.danhSach.push(newHocSinh);
                console.log("Đã Thêm Thành Công Học Sinh: ", newHocSinh);
                // console.log(newHocSinh);
                this.soLuongHocSinhNumber++;
                return maHsobj; 
            },

            timHocSinh: function(maHsCanTim){
                //ma2025003
                const check_1 = maHsCanTim.substring(0, 6);
                const check_2 = maHsCanTim.substring(6, 9);
                if(Number(check_2) >= 1 && Number(check_2) <= this.danhSach.length && check_1 == "ma2025"){
                    const ketQua = this.danhSach.find(hs => hs.maHS === maHsCanTim);  
                    return ketQua;
                }
                else{
                    return null;
                }
                
            },  

            capNhatThongTin: function(maHsCanTim, duLieuMoi){

                const viTri = this.danhSach.findIndex(hocSinh => {
                    return hocSinh.maHS === maHsCanTim;
                })
                
                if(viTri != -1){
                    // Object.assign(duLieuCu, duLieuMoi);
                    // this.danhSach.splice(hocSinhCu, 0, duLieuCu);
                    const hocSinhCu = this.danhSach[viTri];
                    const hocSinhMoi = {
                        ...hocSinhCu,
                        ...duLieuMoi
                    };
                    this.danhSach[viTri] = hocSinhMoi;  
                    return true;
                }
                else{
                    return false;
                }
            },

            xoaHocSinh:  function(maHsCanTim){
                const viTri = this.danhSach.findIndex(hocSinh => {
                    return hocSinh.maHS === maHsCanTim;
                })

                if(viTri !== -1){
                     console.log("Xóa Thành Công", this.danhSach[viTri]);
                    this.danhSach.splice(viTri, 1);

                    return true;
                }
                return false
            },

            layDanhSachTheoLop: function(tenLop){
                const mangLopMoi = this.danhSach.filter(hocSinh => {
     
                    return hocSinh.lopHoc === tenLop; 
                });
                return mangLopMoi;

            },

            thongKeHocLuc: function(){
                const thongKe = {};
                var demXs = 0;
                var demGioi = 0;
                var demKha = 0;
                var demTrungBinh = 0;
                var demKem= 0;
                
                for(let i of this.danhSach){
                    if(i.diemTB >= 9.0){
                        demXs++;
                        thongKe.XuatSac = demXs;
                    }
                    else if(i.diemTB >= 8.0){
                        demGioi++;
                        thongKe.Gioi = demGioi;
                    }
                    else if(i.diemTB >= 6.5){
                        demKha++;
                        thongKe.Kha = demKha;
                    }
                    else if(i.diemTB >= 5.0){
                        demTrungBinh++;
                        thongKe.TrungBinh = demKha;
                    }
                    else {
                        demKem++;
                        thongKe.Kem = demKha;
                    }
                }
                return thongKe;
            },

            sapXepTheoDiem: function(kieuSapXep){
                const danhSachSapXep = [...this.danhSach];

                if(kieuSapXep === "tang"){
                    danhSachSapXep.sort((a, b) => a.diemTB - b.diemTB);
                    
                } else if (kieuSapXep === "giam"){
                    danhSachSapXep.sort((a, b) => b.diemTB - a.diemTB);
                    
                } 
                return danhSachSapXep;
            }


        }
        //Khởi tạo
        quanLyTruongHoc.khoiTao(duLieuBanDau);

        // Thêm Học Sinh
        test_1 = {
            hoTen: "Phú",
            lopHoc: "12b2",
            diemTB: 4.1,
            hanhKiem: "Yếu"
        }
        console.log("------Thêm Học Sinh------");
        console.log("---Danh Sách Trước Khi Thêm Học Sinh---");
        for(let i of quanLyTruongHoc.danhSach){
            console.log(i);
        }
        quanLyTruongHoc.themHocSinh(test_1);
        console.log("---Danh Sách Sau Khi Thêm Học Sinh---");
        for(let i of quanLyTruongHoc.danhSach){
            console.log(i);
        }


        // Tìm Học Sinh
        console.log("------Tìm Học Sinh------");
        const resultTimHocSinh = quanLyTruongHoc.timHocSinh("ma2025002");
        if(resultTimHocSinh){
            console.log("Đã Tìm Thành Công Học Sinh: ",resultTimHocSinh);
            console.log("---Danh Sách Đối Chiếu---");
            for(let i of quanLyTruongHoc.danhSach){
                console.log(i);
            }
        }
        else{
            console.log("Không Tìm Sinh Viên Có Mã Học Sinh Đấy");
        }


        // cập nhật thông tin
        console.log("------Cập Nhật Thông Tin------");
        test_2 = {
            hoTen: "Hí",
            lopHoc: "11b1",
            diemTB: 10,
            hanhKiem: "Yếu"
        }
        console.log("---Danh Sách Trước Khi Câp Nhật---")
        for(let i of quanLyTruongHoc.danhSach){
            console.log(i);
        }
        const maSinhVien = "ma2025005";
        const resultCapNhatThongTin = quanLyTruongHoc.capNhatThongTin(maSinhVien, test_2);
        if(resultCapNhatThongTin === true){
            console.log(`Cập Nhật Thành Công Sinh Viên Có Mã ${maSinhVien}: `);
            console.log("---Danh Sách Sau Khi Cập Nhật---   ");
            for(let i of quanLyTruongHoc.danhSach){
                console.log(i);
            }   
        }
        else{
            console.log("Cập Nhật Thất Bại!");
        }


        // Xóa Học Sinh
        console.log("------Xóa Học Sinh------");
        console.log("---Danh Sách Trước Khi Xóa---");
        for(let i of quanLyTruongHoc.danhSach){
            console.log(i);
        }
        if(quanLyTruongHoc.xoaHocSinh("ma2025005") === true){
            console.log("---Danh Sách Sau Khi Xóa---");
            for(let i of quanLyTruongHoc.danhSach){
                console.log(i);
             }
        }
        else{
            console.log("Không Tìm Thấy Sinh Viên Cần Xóa");
        }

        // lấy danh sách theo lớp
        console.log("---Lấy Danh Sách Theo Lớp---");
        console.log(quanLyTruongHoc.layDanhSachTheoLop("10A1"));


        // thống kê học lực
        console.log("---Thống Kê Học Lực---");
        console.log(quanLyTruongHoc.thongKeHocLuc());

        // sắp xếp theo điểm
        console.log("---Sắp Xếp Theo Điểm---");
        console.log(quanLyTruongHoc.sapXepTheoDiem("giam"));