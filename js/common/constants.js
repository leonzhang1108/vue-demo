/**
 * Created by leon on 2016/4/21.
 */

define(["util","message"],function (Util,Message) {
    var ES = {}
    ES.consts = {}


    ES.msg = {}
    ES.msg.get = function(key, arg) {
        console.log(Message)
        console.log(Util)
        if (Message.msg[key]) {
            console.log('hehehe')

            return key;
            return Util.format_string(Message.msg[key], arg)
        } else {
            console.warn('key not found: ' + key)
            return key;
        }
    }

    ES.consts.container_size = {
        "GP_20": "20GP",
        "GP_40": "40GP",
        "HC_40": "40HC"
    }

    ES.consts.charge_unit = {
        "PER_CONTAINER": "PER_CONTAINER",
        "PER_SEAL": "PER_SEAL",
        "PER_TEU": "PER_TEU",
        "PER_ORDER": "PER_ORDER",
        "PER_20GP": "PER_20GP",
        "PER_40GP": "PER_40GP",
        "PER_40HC": "PER_40HC",
        "PER_TEU_CN": "票"
    }

    ES.consts.company_type = {
        "BUYER": "Buyer",
        "SELLER": "Seller",
        "ESHIPPING": "EShipping",
        "CONSIGNEE": "Consignee" ,//收货人
        "SUPPLIER": "OrderSupplier"
    }

    ES.consts.company_status = {
        "DRAFT": "COMPANY_DRAFTED",
        "UNAUDITED": "COMPANY_UNAUDITED",
        "AUDITED": "COMPANY_AUDITED",
        "REJECTED": "COMPANY_REJECTED"
    }

    ES.consts.currency = {
        "CNY": "CNY",
        "HKD": "HKD",
        "USD": "USD"
    }

    ES.consts.order_status = {
        /**
         *  "WAITING_PAYMENT": "ORDER_WAITING_PAYMENT", // 订单等待付款
         "WAITING_RECEIVE": "ORDER_WAITING_RECEIVE", // 等待收货
         "COMPLETED": "ORDER_COMPLETED", // 订单已完成
         "CANCELLED": "ORDER_CANCELLED", // 订单已取消
         "REFUNDED": "ORDER_REFUNDED", // 订单已退款
         "EXPIRED": "ORDER_EXPIRED", // 订单已过期
         "LOCKED": "ORDER_LOCKED" // 逻辑状态值，通过isLockedPosition来反应
         * **/
        "SUBMITTED": "ORDER_SUBMITTED", // 订单已提交
        "WAITING_RECEIVE": "ORDER_WAITING_RECEIVE", // 等待收货
        "COMPLETED": "ORDER_COMPLETED", // 订单已完成
        "CANCELLED": "ORDER_CANCELLED", // 订单已取消
        "CANCELLED_REQUESTED": "BOOKING_CANCELLED_REQUESTED", // 取消订单申请
        "BOOKING_REQUESTED": "BOOKING_REQUESTED", // 待确认
        "BOOKING_CONFIRMED": "BOOKING_CONFIRMED", // 执行中
        "EXPIRED": "ORDER_EXPIRED" // 订单已过期
    }

    ES.consts.booking_status = {
        "UNAUDITED": "BOOKING_UNAUDITED", // 订舱待审核
        "AUDITED": "BOOKING_AUDITED", // 订舱审核通过
        "REQUESTED": "BOOKING_REQUESTED", // 订舱已提交，正在处理
        "CONFIRMED": "BOOKING_CONFIRMED", // 订舱已确认
        "AMENDED_REQUESTED": "BOOKING_AMENDED_REQUESTED", // 申请订舱修改
        "AMENDED": "BOOKING_AMENDED", // 订舱信息已修改
        "CANCELLED_REQUESTED": "BOOKING_CANCELLED_REQUESTED", // 申请订舱取消
        "CANCELLED": "BOOKING_CANCELLED", // 订舱已取消
        "DECLINED": "BOOKING_DECLINED" // 订舱失败
    }
    ES.consts.charge_status = {
        "CONFIRMED": "CHARGE_CONFIRMED",
        "CANCELLED": "CHARGE_CANCELLED",
        "WAITING_CONFIRM": "CHARGE_WAITING_CONFIRM"
    }
    ES.consts.currency_display = {
        "CNY": [ES.msg.get('currency_cny'), "￥"],
        "USD": [ES.msg.get('currency_usd'), "$"],
        "EUR": [ES.msg.get('currency_eur'), "€"],
        "GBP": [ES.msg.get('currency_gbp'), "£"],
        "HKD": [ES.msg.get('currency_hkd'), "$"],
        "UKN": [ES.msg.get('currency_ukn'), "UKN"]
    }
    ES.consts.language = {
        EN_US: 'en_US',
        ZH_CN: 'zh_CN'
    }
    ES.consts.order_type = {
        "DOMESTIC": "DOMESTIC",
        "FOREIGN": "FOREIGN",
        "EXW": "ZPMC",
        "DSH": "DSH",
        "YWT": "YWT",
        "YWT_YHT": "YWT_YHT",
        "WHS": "WHS",
        "GL": "GENERAL_LOGISTICS",
        "LCL": "ORDERTYPE_LCL",
        "TRUCK":"ORDER_TYPE_TRUCK"
    }
    ES.consts.coupon_status = {
        "UNUSED": "UNUSED_COUPON",
        "USED": "USED_COUPON",
        "EXPIRED": "EXPIRED_COUPON"
    }
    ES.consts.authorities = {
        'UPDATE_ORDER': 'UPDATE_ORDER'
    }
    ES.consts.loadtype = {
        'FCL': 'FCL',
        'LCL': 'LCL'
    }
    ES.consts.domestic_seller_fileType = {
        'WAYBILL': ['bookingwaybill', '运单', 'Waybill', false],
        'CONFIRM_FILE': ['bookingconfirmfile', '订舱确认单', 'Booking Confirm Bill', false],
        'SOFILE': ['sofile', 'SO文件', 'SO File', false],
        'INSURANCE_FILE': ['insuranceFile', '保单', 'Insurance File', false],
        'EXCEPTION':['evidence','异常情况说明','Exception Evidence', false],
        'COMMERCIAL_INVOICE':['commercialInvoice','商业发票','Commercial Invoice', false],
        'PACKING LIST':['packingList','装箱单','Packing List', true],
        'LADING_SAMPLE':['ladingSample','提单样板','The Bill Of Lading Sample', false],
        'EDI_FILE':['ediFile','EDI文件','EDI File', false],
        'DANGEROUS_CARGO':['dangerous_cargo','危险品鉴定说明','Certification Of DGs', true],
        'OTHER':['other','其他','Other', true]
    }
    ES.consts.fileType = {
        'WAYBILL': ['bookingwaybill', '运单', 'Waybill'],
        'CONFIRM_FILE': ['bookingconfirmfile', '订舱确认单', 'Booking Confirm Bill'],
        'SOFILE': ['sofile', 'SO文件', 'SO File'],
        'INSURANCE_FILE': ['insuranceFile', '保单', 'Insurance File'],
        'EXCEPTION':['evidence','异常情况说明','Exception Evidence'],
        'COMMERCIAL_INVOICE':['commercialInvoice','商业发票','Commercial Invoice'],
        'PACKING LIST':['packingList','装箱单','Packing List'],
        'LADING_SAMPLE':['ladingSample','提单样板','The Bill Of Lading Sample'],
        'EDI_FILE':['ediFile','EDI文件','EDI File'],
        'OTHER':['other','其他','Other']
    }
    ES.consts.dsh_fileType = {
        'INSPECTION_REPORT': ['inspectionreport', '验货报告', 'InspectionReport'],
        'INSPECTION_OTHER':['other','其他','Other']
    }
    ES.consts.ywt_fileType = {
        'YWT_CONFIRM_FILE': ['ywt_bookingconfirmfile', '订舱确认SO文件', 'Booking Confirm Bill'],
        'YWT_WAYBILL': ['ywt_bookingwaybill', '提单', 'Waybill'],
        'YWT_INVOICE': ['invoice', '发票', 'Invoice'],
        'YWT_PACKINGLIST': ['packingList', '装箱单', 'Packing List'],
        'YWT_ORIGIN': ['originCertificate', '原产地证明', 'Certificate Of Origin'],
        'YWT_GOODSWAREHOUSE':['goodsWarehouse','货物仓单','Goods Warehouse'],
        'YWT_STORAGECONFIRMATION':['storageConfirmation','入库确认书','Storage Confirmation'],
        'YWT_RELEASECARGOFILE':['releaseCargoFile','放货计划','ReleaseCargo File'],
        'YWT_WAREHOUSEFILE':['warehouseFile','出库仓单','Warehouse File'],
        'YWT_DELIVERYNOTICE':['noticeOfDelivery','提货通知书','Notice Of Delivery'],
        'YWT_OTHER':['other','其他','Other']
    }
    ES.consts.tips = {
        'LOGIN_FIRST': '请先登录',
        'LOGIN_FIRST_EN': 'Require login',
        'INVALID_ORDER': '订单无效',
        'INVALID_ORDER_EN': 'Invalid order'
    }
    ES.consts.route_code = {
        'CNXAM': 'CNXAM'
    }
    ES.consts.language = {
        'ZH_CN': 'zh-cn',
        'EN_US': 'en-us'
    }
    ES.consts.tracking_code = {
        'STATUS_DEPARTURE': 'STATUS_DEPARTURE',
        'STATUS_ARRIVAL': 'STATUS_ARRIVAL'
    }
    ES.consts.contact_type = {
        'AGENT': 'AGENT',
        'SENDER': 'SENDER',
        'RECEIVER': 'RECEIVER',
        'NOTIFIER': 'NOTIFIER'
    }
    ES.consts.transclause = {
        'CY_CY': 'CY_CY',
        'CY_DOOR': 'CY_DOOR',
        'DOOR_CY': 'DOOR_CY',
        'DOOR_DOOR': 'DOOR_DOOR'
    }
    ES.consts.insurance_status = {
        'INSURE_UNSUBMITTED': 'INSURE_UNSUBMITTED',
        'INSURE_SUCCESS': 'INSURE_SUCCESS',
        'INSURE_FAILURE': 'INSURE_FAILURE'
    }
    ES.consts.star_name = {
        '1': ES.msg.get('poor'),
        '2': ES.msg.get('general'),
        '3': ES.msg.get('good'),
        '4': ES.msg.get('very_good'),
        '5': ES.msg.get('very_nice')
    }
    ES.consts.transportMode = {
        'SHIPPING': 'SHIPPING',
        'AIR_TRANSPORTATION': 'AIR_TRANSPORTATION'
    }
    ES.consts.billStatus = {
        'CONFIRMED': 'BILLING_REPORT_CONFIRMED',
        'UNCONFIRMED': 'BILLING_REPORT_UNCONFIRMED'
    }
    ES.consts.validate_port = {
        "CNSHA" : "CNSHA",
        "CNNGB" : "CNNGB",
        "CNTNJ" : "CNTNJ",
        "CNDLC" : "CNDLC",
        "CNXAM" : "CNXAM"
    }
    ES.consts.orderLoadBillWay = {
        'ORIGINAL_BL':'ORIGINAL_BL'
    }
    ES.consts.orderPayMethod = {
        'FREIGHT_PREPAID':'FREIGHT_PREPAID'
    }
    ES.consts.transportationMode = {
        'SHIPPING': 'SHIPPING',
        'AIR_TRANSPORTATION': 'AIR_TRANSPORTATION',
        'SUPPLIER': 'SUPPLIER',
        'LAND': 'LAND'
    }
    ES.consts.serviceSupport = {
        'NEED': '需要',
        'NO_NEED': '不需要'
    }

    ES.consts.accumulated_points = {
        'POINT_LOGIN': 'POINT_LOGIN',//登录
        'POINT_DEL_COMMENT': 'POINT_DEL_COMMENT',// 删除评论
        'POINT_COMMENT': 'POINT_COMMENT',// 评论
        'POINT_REGISTER': 'POINT_REGISTER', //用户注册
        'POINT_COMPLETE_ORDER': 'POINT_COMPLETE_ORDER',// 完成订单
        'POINT_VIEW_PRODUCT': 'POINT_VIEW_PRODUCT',// 查看产品
        'POINT_MAIL_AUTH': 'POINT_MAIL_AUTH',//邮箱认证

        'POINT_PAY_ONLINE': 'POINT_PAY_ONLINE',// 在线支付
    }

    ES.consts.tracking_status = {
        'CREATE': 'STATUS_ORDER_CREATE',
        'COMPLETE':'STATUS_ORDER_COMPLETE'
    }

    ES.consts.truck_filetype = {
        'CONFIRM_FILE': ['bookingconfirmfile', '订舱确认单', 'Booking Confirm Bill'],
        'OTHER':['other','其他','Other']
    }

    ES.consts.tracking_type = {
        'TRACKING':'tracking',
        'CONTAINER':'container'
    }

    ES.consts.cart_type = {
        'VIP': 'domesticVip',
        'SPECIAL': 'domesticSpecial'
    }

    ES.consts.auditStatus = {
        'DRAFT' : 'AUDIT_DRAFT',
        'SUBMITTED' : 'AUDIT_SUBMITTED',
        'ACCEPTED' : 'AUDIT_ACCEPTED',
        'REFUSED' : 'AUDIT_REFUSED'
    }
    ES.consts.nonDgAuditStatus = {
        'ALL' : '',
        'NOT_APPLIED' : 'NON_DG_NOT_APPLIED',
        'DRAFT' : 'NON_DG_DRAFT',
        'SUBMITTED' : 'NON_DG_SUBMITTED',
        'ACCEPTED' : 'NON_DG_ACCEPTED',
        'REFUSED' : 'NON_DG_REFUSED'
    }
    ES.consts.transform_str_msg = {
        'isSOC': 'soc',
        'cargoName': 'cargo_name',
        'containerNo': 'NO',
        'containerSizeType': 'containersize',
        'loadDate': 'in_goods_date',
        'remark': 'remark',
        'sealNo': 'sealnumber',
        'temperature': 'cold_temperature',
        'ventilation': 'ventilation_hole',
        'volumeValue': 'volume',
        'weightValue': 'grossweight',
        'packageQty': 'yiwu_number'
    }
    ES.consts.orderIssueStatus = {
        'ISSUE_REFUSED' : 'ISSUE_REFUSED',
        'ISSUE_ACCEPTED' : 'ISSUE_ACCEPTED',
        'ISSUE_SUBMITTED' : 'ISSUE_SUBMITTED',
        'ISSUE_NOT_APPLIED' : 'ISSUE_NOT_APPLIED'
    }
    ES.consts.commentStatus = {
        'ALREADY_COMMENTED' : 'ORDER_ALREADY_COMMENTED',
        'NO_COMMENTED' : 'ORDER_NO_COMMENTED'
    }
    ES.consts.vip_container_size = ['20GP','40GP','20HC','40HC','20TK','40TK','20RF','40RF','20RH','40RH','20FR','40FR']

    ES.consts.vehicle_size = ['2T','5T','10T','20GP','40GP','40HC']

    ES.consts.feeStatus = {
        DHC_UNCONFIRMED : "DHC_UNCONFIRMED",//未确认
        DHC_CONFIRMED : "DHC_CONFIRMED",//已确认
        DHC_PAID : "DHC_PAID"     //已支付
    }
    ES.consts.containerStatus = {
        NOT_GATE_IN: "PC_NOT_GATE_IN", //待进场
        GATE_IN: "PC_GATE_IN", //已进场
        BOOKED: "PC_BOOKED", //已订舱
        LOOSENED: "PC_LOOSEN" //已开限
    }
    ES.consts.file_type = {
        PRODUCT: "FILE_TYPE_PRODUCT",
        PLAN: "FILE_TYPE_PLAN",
        ARRIVAL: "FILE_TYPE_ARRIVAL",
        MATERIALS: "FILE_TYPE_MATERIALS"
    }
    ES.consts.default_index = {
        '鞍钢南沙办': "../ansteel/cargo-detail.html",
        '营口财务': "../ansteel/money2account-confirm.html",
        '盈港物流': "../ansteel/cargo-detail.html",
        '南沙港': "../ansteel/cargo-detail.html",
    }
    ES.consts.logistics_list = [{
        value: '',
        display: '全部'
    }, {
        value: 'STATUS_CFS_RECIEVE',
        display: 'CFS收货'
    }, {
        value: 'STATUS_CARGO_PICK_UP',
        display: '提货'
    }, {
        value: 'STATUS_GATE_IN',
        display: '进场'
    }, {
        value: 'STATUS_POL_RELEASE',
        display: '报关放行'
    }, {
        value: 'STATUS_LOADING',
        display: '装船'
    }, {
        value: 'STATUS_DEPARTURE',
        display: '离港'
    }, {
        value: 'STATUS_ARRIVAL',
        display: '到港'
    }, {
        value: 'STATUS_TRANSFER_CUSTOMS',
        display: '转关'
    }, {
        value: 'STATUS_TRANSFER_TRUCK',
        display: '转关运输'
    }, {
        value: 'STATUS_WHS_IN',
        display: '入库'
    }, {
        value: 'STATUS_WHS_TALLY_COMPLETE',
        display: '理货'
    }, {
        value: 'STATUS_DISCHARGE',
        display: '卸船'
    }, {
        value: 'STATUS_POD_RELEASE',
        display: '清关放行'
    }, {
        value: 'STATUS_GATE_OUT',
        display: '出场'
    }]

    ES.consts.transportation_type_list = [{
        value: '',
        display: '全部'
    }, {
        value: 'SHIPPING',
        display: '海运'
    }, {
        value: 'AIR_TRANSPORTATION',
        display: '空运'
    }, {
        value: 'LAND',
        display: '陆运'
    }]

    return ES
})
