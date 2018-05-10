# coding=utf-8
import json
import MySQLdb
import random
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def offer_lunshuoweo_zhenti(year):
    conn = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()
    # yearl = int(year)
    yearl = str(year).decode('utf-8')
    sql='''select id ,article_title,article_content,article_comment from lunshuowen_zhenti where year='%s' ''' % (yearl)
    cur.execute(sql)
    all= cur.fetchall()
    id = str(all[0][0]).strip().decode('utf-8')
    title= str(all[0][1]).strip().decode('utf-8')
    content = str(all[0][2]).strip().decode('utf-8')
    comment= str(all[0][3]).strip().decode('utf-8')

    title_content=title.replace('\r','').split('\n')
    new_title_content=[]
    for x in title_content:
        new_title_content.append('    '+x)

    content=content.replace('\r','').split('\n')
    name=content[0]
    content=content[1:]
    new_content=[]
    for x in content:
        new_content.append('    '+x)

    comment=comment.replace('\r','').split('\n')
    new_comment=[]
    for x in comment:
        new_comment.append('    '+x)

    a_dict={}

    a_dict['id']=id
    a_dict['title']=new_title_content
    a_dict['name']=name
    a_dict['content']=new_content
    a_dict['comment']=new_comment

    jsondata = json.dumps(a_dict, ensure_ascii=False)
    print jsondata



def offer_lunshuoweo_zhenti1():
    sys.exit(offer_lunshuoweo_zhenti(sys.argv[1]))
if __name__ == "__main__":

    offer_lunshuoweo_zhenti1()

    #offer_lunshuoweo_zhenti('管理类联考2011年真题')

