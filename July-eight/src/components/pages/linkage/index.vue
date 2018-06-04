<template>
    <div id="linkage">
       <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
       <el-dialog class="dialog1" title="联动组件" :visible.sync="dialogFormVisible" width="80%">
           <el-form ref="form" :model="form" label-width="100px">
            <el-row>
                <el-col :span="18">
                    <!-- <el-form-item label="订阅模版">
                        <el-select @change="subscribeChange" @remove-tag="removeTag" v-model="form.sub" placeholder="请选择订阅模版" multiple>
                            <el-option v-for="item in subscribe" :key="item.value" :value="item.value" :label="item.label"></el-option>
                        </el-select>
                    </el-form-item> -->


                    <el-tabs :tab-position="tabPosition" style="height: 300px;">
                        <el-tab-pane :label="item.OBJNAME" v-for="item in findTemplate" :key="item.OBJID">
                            <el-checkbox-group v-model="checkList" v-for="rule in item.findRule" :key="rule.OBJID">
                                <el-checkbox class="rule" :label="rule.OBJNAME" border size="mini"></el-checkbox>
                            </el-checkbox-group>
                        </el-tab-pane>
                    </el-tabs>

                
                    <!-- <el-form-item label="过滤规则">
                        <el-select @change="valueChange" v-model="value7" placeholder="请选择" multiple>
                            <el-option-group
                            v-for="group in filterRule"
                            :key="group.label"
                            :label="group.label">
                            <el-option
                                v-for="(item,i) in group.options"
                                :key="i"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                            </el-option-group>
                        </el-select>
                    </el-form-item> -->
                </el-col> 
                <el-col :span="6">
                    <div>订阅模版：{{form.sub}}</div>
                    <div>过滤规则：{{value7}}</div>
                    <div class="card-box">
                        <el-card class="box-card" v-for="item in cardList" :key="item.cardName">
                            <div slot="header" class="clearfix">
                                <span>{{item.cardName}}</span>
                                <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
                            </div>
                            <div v-for="v in item.cardItem" :key="v.label" class="text item">
                                {{ v.label }}
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
           </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Container from "@/components/pages/html5_drag/Container";
export default {
  components: {
    Container
  },
  data() {
    return {
      checkList: [],
      tabPosition: 'left',
      cardItemVar: [],
      optionsRule: [],
      selectedRule: [],
      cardList: [],
      filterRuleVar: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        sub: [],
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      /**订阅模版 */
        "findTemplate": [
                {
                    "OBJID": "ff8080814a38ebc3014a3db86c551015",
                    "OBJNAME": "专业机构（公募基金）数量化分析师类的基金分析模板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        },
                        {
                            "OBJID": "4028a3df493b9bec01493ba5800f00b1",
                            "OBJNAME": "股票、权证买入建议"
                        },
                        {
                            "OBJID": "4028a3df493b9bec01493ba667f700f3",
                            "OBJNAME": "四星级、五星级所有报告"
                        },
                        {
                            "OBJID": "4028a3df493b9bec01493ba6173800e7",
                            "OBJNAME": "五星级所有报告"
                        }
                    ],
                },
                {
                    "OBJID": "3C71B57F94AA4EC49139655EA18B02C9",
                    "OBJNAME": "全部行业报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "A20994778E644F31B9A4607F09A5CDAB",
                    "OBJNAME": "全部新兴产业",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "F8514E52CB104EFDAE2096AF1B1BC63F",
                    "OBJNAME": "全部新三板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "98B4043E0E2C4FBD98CEBFB2FF554889",
                    "OBJNAME": "全部新股研究",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "3E02171E60C84212883027848EEE50D6",
                    "OBJNAME": "全部基金研究",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "4DE8D16D9E40408E8D8211E527669516",
                    "OBJNAME": "全部宏观报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "A577DB06092F4B2DB3BA149AFB5A016C",
                    "OBJNAME": "全部公司报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "0380D91D92E949C8BCFFABD835E43675",
                    "OBJNAME": "全部港股研究报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "3610880098BB4F3D8638C0E8AA72911D",
                    "OBJNAME": "全部策略报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "0FCC7C74C99F4A0A8E348FEF56583641",
                    "OBJNAME": "全部报告(不含基金)",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "51D25D628A08419EB393B72AB2508431",
                    "OBJNAME": "全部报告",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "ff8080814a38ebc3014a3db859ce0df0",
                    "OBJNAME": "每日、每周基金资讯模板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "ff8080814a38ebc3014a3db86ca7101e",
                    "OBJNAME": "分析师给负责的上市公司其他类报告模板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "ff8080814a38ebc3014a3db860130ead",
                    "OBJNAME": "非上市公司行业类报告模板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                },
                {
                    "OBJID": "ff8080814a38ebc3014a3db877e81159",
                    "OBJNAME": "非上市公司其他类报告模板",
                    "findRule": [
                        {
                            "OBJID": "4028a3df493b9bec01493ba95e38017d",
                            "OBJNAME": "持有及以上建议的公司、衍生品类报告匹配上市公司"
                        }
                    ],
                }
            ], 
      subscribe: [
        {
          value: "1",
          label: "模版1"
        },
        {
          value: "2",
          label: "模版2"
        },
        {
          value: "3",
          label: "模版3"
        },
        {
          value: "4",
          label: "模版4"
        },
        {
          value: "5",
          label: "模版5"
        },
        {
          value: "6",
          label: "模版6"
        }
      ],
      /**过滤规则 */
      filterRule: [],
      value7: []
    };
  },
  methods: {
    sure() {

    },
    subscribeChange() {
      this.$http.get("static/mockJson/filterRule.json").then(res => {
        this.filterRuleVar = res.data.filterRule;
        this.filterRule = [];
        this.form.sub.forEach(v => {
          this.filterRuleVar.forEach(j => {
            if (v === j.value) {
              this.filterRule.push({
                label: j.label,
                options: j.options
              });
            }
          });
        });
      });
    },
    valueChange() {
        
    },
    removeTag() {
       this.form.sub.forEach(v => {
           this.value7.forEach(j => {

           })
       })
    }
  }
};
</script>

<style lang="scss">
#linkage {
  .el-tabs__content {
        text-align: left;
  }
  .el-dialog__body {
    height: 310px;
  }
  .el-select {
      width: 90%;
  }
  //card
  .el-card {
      width: 90%;
  }
  .el-card__header {
      padding: 5px;
  }
  .el-card__body {
      padding: 5px;
      .item {
          margin-bottom: 3px;
      }
  }
  .card-box {
      width: 100%;
      height: 200px;
      overflow: auto;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .rule {
      margin-top: 5px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
  .btn {
     width: 90%;
  }
}
</style>


