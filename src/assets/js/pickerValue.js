/* 证件类型 */
export let certiMap = {
  '身份证':'1',
  '出生证':'4',
  '居民户口簿':'12'
}
export let getCertiId = function (val) {
  return certiMap[val]
}
/** 投保人被保人关系 **/
export let kinshipMap = {
  '配偶': '1',
  '子女': '2',
  '父母': '3',
  '本人': '5'
}

export let kinshipList = [['本人','配偶','父母','子女']]

export let getKinshipId = function (val) {
  return kinshipMap[val]
}

// 根据投保人与被保人的关系，反推被保人与投保人的关系
export let getKinshipIdReverse = function (val) {
  if (val === '子女') {
    return '3'
  } else if (val === '父母') {
    return '2'
  } else {
    return kinshipMap[val]
  }
}

/*税收居民身份*/
export let crsMap  = {
  '仅为中国税收居民': '1',
  '仅为非居民': '2',
  '既是中国税收居民又是其他国家（地区）税收居民': '3',
};
/** 婚姻状况 **/
export let marriageMap = {
  '已婚': '1',
  '未婚': '2',
  '离婚': '3',
  '丧偶': '4'
}

export let marriageList = [['已婚','未婚','离婚','丧偶']]

export let getMarriageId = function (val) {
  return marriageMap[val]
}

/** 税优居民身份 **/
export let taxIdentityMap = {
  '仅为中国税收居民': '1',
  '仅为非居民': '2',
  '既是中国税收居民又是其他国家（地区）税收居民': '3'
}

export let taxIdentityList = [['仅为中国税收居民','仅为非居民','既是中国税收居民又是其他国家（地区）税收居民']]

export let getTaxIdentityId = function (val) {
  return taxIdentityMap[val]
}

/** 告知方式 **/
export let noticeWayMap = {
  '自助查询(推荐)': '1',
  'E-mail': '2',
  '短信(推荐)': '3',
  '平信': '4'
}

export let getNoticeWay = function (val) {
  return noticeWayMap[val]
}

/** 银行账号 **/
export let bankMap = {
  '民生银行': '0012',
  '中国银行': '0003',
  '平安银行': '0068',
  '邮政储蓄': '0015',
  '中国工商银行': '0001',
  '中国农业银行': '0004',
  '浦发银行': '0013'
}

export let getBankCode = function (val) {
  return bankMap[val]
}



