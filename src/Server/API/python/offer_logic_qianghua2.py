#coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


def offer_logic_qianghua(user,chapter_name_ch):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()

    all_user_name=[]
    sql1_1="select user_name from user_logic_shuipingceshi"
    cur.execute(sql1_1)
    test_user_name=cur.fetchall()
    for x in test_user_name:
        if x[0] not in all_user_name:
            all_user_name.append(x[0])

    shuipingceshi_flag=1
    if user not in all_user_name:
        shuipingceshi_flag=0

    chapter_en=['logic_mba_01luojiyuyan','logic_mba_02mingtiluoji','logic_mba_03cixiangluoji','logic_mba_04luojiyingyong','logic_mba_05yanyituili',
                      'logic_mba_06guinaluoji','logic_mba_07jiashe','logic_mba_08zhichi','logic_mba_09xueruo','logic_mba_10pingjia',
                      'logic_mba_11jieshi','logic_mba_12tuilun','logic_mba_13bijiao','logic_mba_14miaoshu','logic_mba_15zonghe']
    chapter_ch=['逻辑语言','命题逻辑','词项逻辑','逻辑应用','演绎推理','归纳逻辑','假设','支持','削弱','评价','解释','推论','比较','描述','综合']

    index_ch=chapter_ch.index(chapter_name_ch)
    chapter_name_en=chapter_en[index_ch]


    #print(chapter_name_en)
    #print(chapter_name_ch)
    zhongdian_flag=0
    sql1_1_1="select user_name ,chapter_name from user_logic_finish_zhongdian"
    cur.execute(sql1_1_1)
    test_zhongdian_user=cur.fetchall()
    for x in test_zhongdian_user:
        if x[0]==user and x[1]==chapter_name_ch:
            zhongdian_flag=1
    if shuipingceshi_flag==1 and zhongdian_flag==1:
        sql1="select type from  %s "%(chapter_name_en)
        cur.execute(sql1)
        type_name=cur.fetchall()
        type_list=[]
        for x in type_name:
            if x[0]  not in type_list:
                type_list.append(x[0])


        sql1_1='''select timu_id from user_logic_finish_zhongdian where user_name='%s'and chapter_name='%s' '''%(user,chapter_name_ch)
        cur.execute(sql1_1)

        zhongdian_id=cur.fetchall()
        #print(zhongdian_id)
        length=len(zhongdian_id)
        #print(length)
        zhongdian_id=zhongdian_id[length-1][0]
        #print(zhongdian_id)


        zhongdian_id=zhongdian_id.split('*')
        while ""in zhongdian_id:
            zhongdian_id.remove("")

        zhongdian_id_new=[int(i) for i in zhongdian_id]
        #print(zhongdian_id)
        #print(zhongdian_id_new)



        result={};total_timu=[]
        for x in type_list:
            per_result={}
            sql2='''select id,nanyi from  %s where type='%s' ''' %(chapter_name_en,x)
            cur.execute(sql2)
            text=cur.fetchall()

            yi_list=[]
            zhong_list=[]
            nan_list=[]

            for y in text:


                if y[1] =='易' and int(y[0]) not in zhongdian_id_new:
                    yi_list.append(int(y[0]))
                elif y[1]=='中' and int(y[0]) not in zhongdian_id_new:
                    zhong_list.append(int(y[0]))
                elif y[1]=='难' and int(y[0]) not in zhongdian_id_new:
                    nan_list.append(int(y[0]))


            #print(yi_list)
            #print(zhong_list)
            #print(nan_list)


            sample_list=[]

            if len(yi_list)>=1:
                sample_list.append(random.sample(yi_list,1)[0])


            if len(zhong_list)>=2:
                sample_list+=random.sample(zhong_list,2)
            elif len(zhong_list)==1:
                sample_list.append(random.sample(zhong_list,1)[0])

            if len(nan_list)>=2:
                sample_list+=random.sample(nan_list,2)
            elif len(nan_list)==1:
                sample_list.append(random.sample(nan_list,1)[0])

            #print('sample_list',sample_list)




            per_type=[]

            if (len(sample_list)!=0):
                for num in sample_list:
                    per_timu={}
                    sql3='''select* from  %s where id='%s' ''' %(chapter_name_en,num)
                    cur.execute(sql3)
                    all_timu=cur.fetchall()[0]

                    per_timu["id"]=all_timu[0]
                    question=all_timu[1].replace('\r','').split('\n')
                    new_qusetion=[]
                    for char1 in question:
                        char1=char1.strip()
                        new_qusetion.append(char1)
                    per_timu['question']=new_qusetion
                    per_timu['answer']=all_timu[2]
                    analysis=all_timu[3].replace('\r','').split('\n')
                    new_analysis=[]
                    for char2 in analysis:
                        char2=char2.strip()
                        new_analysis.append(char2)
                    per_timu["analysis"]=new_analysis

                    per_timu["op_one"]=all_timu[4]
                    per_timu["op_two"]=all_timu[5]
                    per_timu["op_three"]=all_timu[6]
                    per_timu["op_four"]=all_timu[7]
                    per_timu["op_five"]=all_timu[8]

                    per_type.append(per_timu)

            total_timu.append(per_type)
        result["timu"]=total_timu
        result["shunxu"]=type_list
        result["chapter_name"]=chapter_name_ch
        result["flag"]=1

        jsondata = json.dumps(result, ensure_ascii=False)
        print jsondata

    elif shuipingceshi_flag==0:
        result={}
        result["timu"]=[]
        result["shunxu"]=[]
        result["chapter_name"]=[]
        result["flag"]=2

        jsondata = json.dumps(result, ensure_ascii=False)
        print jsondata


    elif shuipingceshi_flag==1 and zhongdian_flag==0:
        result={}
        result["timu"]=[]
        result["shunxu"]=[]
        result["chapter_name"]=[]
        result["flag"]=3

        jsondata = json.dumps(result, ensure_ascii=False)
        print jsondata

        #print("该用户已完成水平测试，但未完成该章节的重点题型")

def offer_logic_qianghua1():
    sys.exit(offer_logic_qianghua(sys.argv[1],sys.argv[2]))
if __name__ == "__main__":

    #offer_logic_qianghua('testdzh','逻辑语言')
    offer_logic_qianghua1()



