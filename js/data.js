var place_data = [
    {
        tag: "taipei_city",
        place: "臺北市",
        high: 22,
        weather: "高風險地區",
        notice: "雙北疫情警戒標準已升至三級，除必要活動應避免外出",
    },

    {
        tag: "new_taipei_city",
        place: "新北市",
        high: 61,
        weather: "高風險地區",
        notice: "雙北疫情警戒標準已升至三級，除必要活動應避免外出",
    },

    {
        tag: "taichung_city",
        place: "台中市",
        high: 5,
        weather: "高風險地區",
        notice: "應減少外出機會，並密切關注中央疫情指揮中心公布最新消息",
    },

    {
        tag: "tainan_city",
        place: "臺南市",
        high: 1,
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "kaohsiung_city",
        place: "高雄市",
        high: 1,
        weather: "中低風險地區",
        notice: "避免前往高風險、中高風險地區",
    },

    {
        tag: "keelung_city",
        place: "基隆市",
        high: 2,
        weather: "中風險地區",
        notice: "避免前往高風險、中高風險地區",
    },

    {
        tag: "taoyuan_country",
        place: "桃園市",
        high: 53,
        weather: "高風險地區",
        notice: "應減少外出機會，並密切關注中央疫情指揮中心公布最新消息",
    },

    {
        tag: "hsinchu_city",
        place: "新竹市",
        high: 3,
        weather: "中高風險地區",
        notice: "應減少外出機會，並密切關注中央疫情指揮中心公布最新消息",
    },

    {
        tag: "hsinchu_country",
        place: "新竹縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "miaoli_country",
        place: "苗栗縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "changhua_country",
        place: "彰化縣",
        high: 4,
        weather: "中高風險地區",
        notice: "應減少外出機會，並密切關注中央疫情指揮中心公布最新消息",
    },

    {
        tag: "nantou_country",
        place: "南投縣",
        high: 1,
        weather: "中低風險地區",
        notice: "避免前往高風險、中高風險地區",
    },

    {
        tag: "yunlin_country",
        place: "雲林縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "chiayi_city",
        place: "嘉義市",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "chiayi_country",
        place: "嘉義縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "pingtung_country",
        place: "屏東縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "yilan_country",
        place: "宜蘭縣",
        high: 9,
        weather: "高風險地區",
        notice: "應減少外出機會，並密切關注中央疫情指揮中心公布最新消息",
    },

    {
        tag: "hualien_country",
        place: "花蓮縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },

    {
        tag: "taitung_country",
        place: "台東縣",
        high: "尚無資料",
        weather: "低風險地區",
        notice: "勤洗手、戴口罩，保持警覺並減少前往人潮眾多的地方",
    },
]
    ;

var vm = new Vue({
    el: "#app",
    data: {
        filter: "",
        place_data: place_data
    }, computed: {
        now_area: function () {
            var vobj = this;
            var result = this.place_data.filter(function (obj) {
                return obj.tag == vobj.filter;
            });
            if (result.length == 0) {
                return null;
            }
            return result[0];
        }
    }
});

$("path").mouseenter(function (e) {
    var tagname = $(this).attr("data-name");
    vm.filter = tagname;

});

