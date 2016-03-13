"use strict"

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

var data = [{"points":[[0,737],[201,734],[283,557]],"color":"#662D91"},{"points":[[157,389],[263,462],[314,353.1]],"color":"#808080"},{"points":[[263,462],[283,557],[322,443]],"color":"#524FA1"},{"points":[[314,353.1],[263,462],[322,443]],"color":"#ADADAD"},{"points":[[157,389],[314,353.1],[383,236.1]],"color":"#5A5A5A"},{"points":[[383,236.1],[314,353.1],[398,301.1]],"color":"#919191"},{"points":[[398,301.1],[314,353.1],[404,335.1]],"color":"#525252"},{"points":[[322,443],[283,557],[408,495]],"color":"#9A03FF"},{"points":[[283,557],[389,568],[408,495]],"color":"#524FA1"},{"points":[[314,353.1],[322,443],[411,388]],"color":"#ACACAC"},{"points":[[404,335.1],[314,353.1],[411,388]],"color":"#C0C0C0"},{"points":[[398,301.1],[404,335.1],[415,306.1]],"color":"#373737"},{"points":[[404,335.1],[413,335.1],[415,306.1]],"color":"#3E3E3E"},{"points":[[0,-3],[9,90.1],[415,101.1]],"color":"#662D91"},{"points":[[9,90.1],[383,236.1],[415,101.1]],"color":"#524FA1"},{"points":[[322,443],[408,495],[419,414]],"color":"#C8C8C8"},{"points":[[411,388],[322,443],[419,414]],"color":"#9A03FF"},{"points":[[404,335.1],[411,388],[420,353.1]],"color":"#8C8C8C"},{"points":[[413,335.1],[404,335.1],[420,353.1]],"color":"#686868"},{"points":[[420,353.1],[411,388],[422,372]],"color":"#A0A0A0"},{"points":[[411,388],[419,414],[425,390]],"color":"#969696"},{"points":[[422,372],[411,388],[425,390]],"color":"#979797"},{"points":[[420,353.1],[422,372],[426,354.1]],"color":"#656565"},{"points":[[413,335.1],[420,353.1],[426,340.1]],"color":"#616161"},{"points":[[420,353.1],[426,354.1],[426,340.1]],"color":"#777777"},{"points":[[398,301.1],[415,306.1],[428,280.1]],"color":"#3A3A3A"},{"points":[[425,235.1],[383,236.1],[429,258.1]],"color":"#424242"},{"points":[[383,236.1],[398,301.1],[429,258.1]],"color":"#3F3F3F"},{"points":[[398,301.1],[428,280.1],[429,258.1]],"color":"#3A3A3A"},{"points":[[428,280.1],[415,306.1],[430,285.1]],"color":"#3F3F3F"},{"points":[[430,285.1],[415,306.1],[430,314.1]],"color":"#404040"},{"points":[[415,306.1],[413,335.1],[430,314.1]],"color":"#424242"},{"points":[[413,335.1],[426,340.1],[436,320.1]],"color":"#4F4F4F"},{"points":[[430,314.1],[413,335.1],[436,320.1]],"color":"#4A4A4A"},{"points":[[422,372],[425,390],[437,354.1]],"color":"#727272"},{"points":[[426,354.1],[422,372],[437,354.1]],"color":"#8D8D8D"},{"points":[[430,285.1],[430,314.1],[437,317.1]],"color":"#767676"},{"points":[[430,314.1],[436,320.1],[437,317.1]],"color":"#8A8A8A"},{"points":[[436,320.1],[426,340.1],[437,340.1]],"color":"#898989"},{"points":[[426,340.1],[426,354.1],[437,340.1]],"color":"#8F8F8F"},{"points":[[426,354.1],[437,354.1],[437,340.1]],"color":"#AEAEAE"},{"points":[[415,101.1],[383,236.1],[438,162.1]],"color":"#666666"},{"points":[[383,236.1],[425,235.1],[438,162.1]],"color":"#4B4B4B"},{"points":[[425,235.1],[429,258.1],[439,247.1]],"color":"#474747"},{"points":[[437,354.1],[425,390],[441,402]],"color":"#524FA1"},{"points":[[425,390],[419,414],[441,402]],"color":"#666666"},{"points":[[419,414],[408,495],[445,456]],"color":"#C4C4C4"},{"points":[[441,402],[419,414],[445,407]],"color":"#707070"},{"points":[[389,568],[283,557],[448,707]],"color":"#626262"},{"points":[[437,340.1],[437,354.1],[450,335.1]],"color":"#BBBBBB"},{"points":[[436,320.1],[437,340.1],[450,335.1]],"color":"#757575"},{"points":[[428,280.1],[430,285.1],[451,275.1]],"color":"#A3A3A3"},{"points":[[429,258.1],[428,280.1],[451,275.1]],"color":"#C1C1C1"},{"points":[[439,247.1],[429,258.1],[451,275.1]],"color":"#CDCDCD"},{"points":[[445,456],[408,495],[452,470]],"color":"#595959"},{"points":[[389,568],[448,707],[452,555]],"color":"#524FA1"},{"points":[[452,470],[408,495],[453,527]],"color":"#555555"},{"points":[[408,495],[389,568],[453,527]],"color":"#626262"},{"points":[[389,568],[452,555],[453,527]],"color":"#662D91"},{"points":[[425,235.1],[439,247.1],[456,231.1]],"color":"#3F3F3F"},{"points":[[419,414],[445,456],[456,425]],"color":"#4F4F4F"},{"points":[[445,407],[419,414],[456,425]],"color":"#6B6B6B"},{"points":[[437,317.1],[436,320.1],[458,329.1]],"color":"#7E7E7E"},{"points":[[436,320.1],[450,335.1],[458,329.1]],"color":"#6D6D6D"},{"points":[[438,162.1],[425,235.1],[459,202.1]],"color":"#4D4D4D"},{"points":[[425,235.1],[456,231.1],[459,202.1]],"color":"#454545"},{"points":[[439,247.1],[451,275.1],[459,250.1]],"color":"#DEDEDE"},{"points":[[456,231.1],[439,247.1],[459,250.1]],"color":"#DCDCDC"},{"points":[[415,101.1],[438,162.1],[461,153.1]],"color":"#686868"},{"points":[[438,162.1],[459,202.1],[461,153.1]],"color":"#6C6C6C"},{"points":[[450,335.1],[437,354.1],[463,356.1]],"color":"#C2C2C2"},{"points":[[437,354.1],[441,402],[463,356.1]],"color":"#B4B4B4"},{"points":[[458,329.1],[450,335.1],[463,339.1]],"color":"#555555"},{"points":[[450,335.1],[463,356.1],[463,339.1]],"color":"#888888"},{"points":[[437,317.1],[458,329.1],[466,315.1]],"color":"#929292"},{"points":[[437,317.1],[466,315.1],[469,302.1]],"color":"#5A5A5A"},{"points":[[430,285.1],[437,317.1],[469,302.1]],"color":"#C3C3C3"},{"points":[[451,275.1],[430,285.1],[469,302.1]],"color":"#ADADAD"},{"points":[[458,329.1],[463,339.1],[470,327.1]],"color":"#7A7A7A"},{"points":[[466,315.1],[458,329.1],[470,327.1]],"color":"#989898"},{"points":[[459,202.1],[456,231.1],[470,218.1]],"color":"#454545"},{"points":[[441,402],[445,407],[472,408]],"color":"#787878"},{"points":[[445,407],[456,425],[472,408]],"color":"#6C6C6C"},{"points":[[453,527],[452,555],[473,546]],"color":"#662D91"},{"points":[[463,339.1],[463,356.1],[475,339.1]],"color":"#8D8D8D"},{"points":[[470,327.1],[463,339.1],[475,339.1]],"color":"#5B5B5B"},{"points":[[445,456],[452,470],[476,442]],"color":"#6B6B6B"},{"points":[[456,425],[445,456],[476,442]],"color":"#524FA1"},{"points":[[459,250.1],[451,275.1],[477,272.1]],"color":"#D4D4D4"},{"points":[[451,275.1],[469,302.1],[477,272.1]],"color":"#CDCDCD"},{"points":[[459,250.1],[477,272.1],[477,251.1]],"color":"#E1E1E1"},{"points":[[470,218.1],[456,231.1],[481,234.1]],"color":"#535353"},{"points":[[456,231.1],[459,250.1],[481,234.1]],"color":"#D5D5D5"},{"points":[[459,250.1],[477,251.1],[481,234.1]],"color":"#E7E7E7"},{"points":[[472,408],[456,425],[485,422]],"color":"#8D8D8D"},{"points":[[456,425],[476,442],[485,422]],"color":"#686868"},{"points":[[477,272.1],[469,302.1],[486,306.1]],"color":"#E2E2E2"},{"points":[[469,302.1],[466,315.1],[486,306.1]],"color":"#545454"},{"points":[[466,315.1],[470,327.1],[486,306.1]],"color":"#878787"},{"points":[[463,356.1],[441,402],[487,380]],"color":"#C8C8C8"},{"points":[[441,402],[472,408],[487,380]],"color":"#9A03FF"},{"points":[[476,442],[452,470],[487,491]],"color":"#5B5B5B"},{"points":[[452,470],[453,527],[487,491]],"color":"#7F7F7F"},{"points":[[475,339.1],[463,356.1],[488,360.1]],"color":"#C4C4C4"},{"points":[[463,356.1],[487,380],[488,360.1]],"color":"#A8A8A8"},{"points":[[481,234.1],[477,251.1],[490,231.1]],"color":"#C3C3C3"},{"points":[[470,218.1],[481,234.1],[490,231.1]],"color":"#414141"},{"points":[[453,527],[473,546],[490,525]],"color":"#6E6E6E"},{"points":[[487,491],[453,527],[490,525]],"color":"#524FA1"},{"points":[[475,339.1],[488,360.1],[491,335.1]],"color":"#A1A1A1"},{"points":[[486,306.1],[470,327.1],[492,328.1]],"color":"#8F8F8F"},{"points":[[470,327.1],[475,339.1],[492,328.1]],"color":"#5A5A5A"},{"points":[[475,339.1],[491,335.1],[492,328.1]],"color":"#5A5A5A"},{"points":[[488,360.1],[487,380],[492,374]],"color":"#AAAAAA"},{"points":[[470,218.1],[490,231.1],[492,231.1]],"color":"#414141"},{"points":[[492,374],[487,380],[493,397]],"color":"#838383"},{"points":[[487,380],[472,408],[493,397]],"color":"#437B76"},{"points":[[472,408],[485,422],[493,411]],"color":"#797979"},{"points":[[493,397],[472,408],[493,411]],"color":"#524FA1"},{"points":[[486,306.1],[492,328.1],[496,320.1]],"color":"#868686"},{"points":[[490,525],[473,546],[497,560]],"color":"#858585"},{"points":[[473,546],[452,555],[497,560]],"color":"#686868"},{"points":[[488,360.1],[492,374],[498,371]],"color":"#CBCBCB"},{"points":[[490,231.1],[477,251.1],[499,258.1]],"color":"#DDDDDD"},{"points":[[492,231.1],[490,231.1],[499,258.1]],"color":"#959595"},{"points":[[477,251.1],[477,272.1],[499,258.1]],"color":"#E9E9E9"},{"points":[[477,272.1],[486,306.1],[499,275.1]],"color":"#E7E7E7"},{"points":[[499,258.1],[477,272.1],[499,275.1]],"color":"#DEDEDE"},{"points":[[491,335.1],[488,360.1],[499,361.1]],"color":"#C5C5C5"},{"points":[[488,360.1],[498,371],[499,361.1]],"color":"#CECECE"},{"points":[[486,306.1],[496,320.1],[501,313.1]],"color":"#5F5F5F"},{"points":[[501,313.1],[496,320.1],[505,324.1]],"color":"#6D6D6D"},{"points":[[492,328.1],[491,335.1],[505,324.1]],"color":"#727272"},{"points":[[496,320.1],[492,328.1],[505,324.1]],"color":"#686868"},{"points":[[499,361.1],[498,371],[505,361.1]],"color":"#D2D2D2"},{"points":[[485,422],[476,442],[505,458]],"color":"#8E8E8E"},{"points":[[476,442],[487,491],[505,458]],"color":"#662D91"},{"points":[[505,324.1],[491,335.1],[507,341.1]],"color":"#6C6C6C"},{"points":[[491,335.1],[499,361.1],[507,341.1]],"color":"#B4B4B4"},{"points":[[499,361.1],[505,361.1],[507,341.1]],"color":"#E2E2E2"},{"points":[[505,361.1],[498,371],[507,374]],"color":"#C8C8C8"},{"points":[[492,374],[493,397],[507,374]],"color":"#9B9B9B"},{"points":[[498,371],[492,374],[507,374]],"color":"#4C4C4C"},{"points":[[493,397],[493,411],[510,401]],"color":"#808080"},{"points":[[507,374],[493,397],[510,401]],"color":"#848484"},{"points":[[505,361.1],[507,374],[514,363.1]],"color":"#E1E1E1"},{"points":[[499,275.1],[486,306.1],[515,290.1]],"color":"#F1F1F1"},{"points":[[486,306.1],[501,313.1],[515,290.1]],"color":"#E5E5E5"},{"points":[[510,401],[493,411],[515,412]],"color":"#767676"},{"points":[[493,411],[485,422],[515,412]],"color":"#DBDBDB"},{"points":[[501,313.1],[505,324.1],[517,312.1]],"color":"#919191"},{"points":[[515,290.1],[501,313.1],[517,312.1]],"color":"#E7E7E7"},{"points":[[487,491],[490,525],[518,497]],"color":"#7B7B7B"},{"points":[[505,458],[487,491],[518,497]],"color":"#686868"},{"points":[[492,231.1],[499,258.1],[519,209.1]],"color":"#3F3F3F"},{"points":[[459,202.1],[470,218.1],[519,209.1]],"color":"#3F3F3F"},{"points":[[470,218.1],[492,231.1],[519,209.1]],"color":"#3C3C3C"},{"points":[[507,374],[510,401],[521,375]],"color":"#777777"},{"points":[[514,363.1],[507,374],[521,375]],"color":"#C8C8C8"},{"points":[[507,341.1],[505,361.1],[521,345.1]],"color":"#F3F3F3"},{"points":[[505,361.1],[514,363.1],[521,345.1]],"color":"#9A03FF"},{"points":[[415,101.1],[461,153.1],[525,162.1]],"color":"#818181"},{"points":[[461,153.1],[459,202.1],[525,162.1]],"color":"#545454"},{"points":[[459,202.1],[519,209.1],[525,162.1]],"color":"#662D91"},{"points":[[485,422],[505,458],[525,430]],"color":"#727272"},{"points":[[515,412],[485,422],[525,430]],"color":"#BCBCBC"},{"points":[[517,312.1],[505,324.1],[526,324.1]],"color":"#C7C7C7"},{"points":[[505,324.1],[507,341.1],[526,324.1]],"color":"#E2E2E2"},{"points":[[507,341.1],[521,345.1],[526,324.1]],"color":"#E0E0E0"},{"points":[[526,324.1],[521,345.1],[526,344.1]],"color":"#898989"},{"points":[[517,312.1],[526,324.1],[526,315.1]],"color":"#939393"},{"points":[[497,560],[452,555],[526,659]],"color":"#595959"},{"points":[[519,209.1],[499,258.1],[528,267.1]],"color":"#424242"},{"points":[[499,258.1],[499,275.1],[528,267.1]],"color":"#DDDDDD"},{"points":[[499,275.1],[515,290.1],[528,267.1]],"color":"#EBEBEB"},{"points":[[514,363.1],[521,375],[528,370]],"color":"#CDCDCD"},{"points":[[510,401],[515,412],[529,398]],"color":"#A6A6A6"},{"points":[[521,375],[510,401],[529,398]],"color":"#AFAFAF"},{"points":[[519,209.1],[528,267.1],[531,208.1]],"color":"#4B4B4B"},{"points":[[525,162.1],[519,209.1],[532,175.1]],"color":"#545454"},{"points":[[528,370],[521,375],[534,382]],"color":"#373737"},{"points":[[521,375],[529,398],[534,382]],"color":"#BCBCBC"},{"points":[[515,412],[525,430],[535,412]],"color":"#EEEEEE"},{"points":[[529,398],[515,412],[535,412]],"color":"#8A8A8A"},{"points":[[526,344.1],[521,345.1],[536,356.1]],"color":"#E8E8E8"},{"points":[[521,345.1],[514,363.1],[536,356.1]],"color":"#F1F1F1"},{"points":[[514,363.1],[528,370],[536,356.1]],"color":"#C8C8C8"},{"points":[[526,315.1],[526,324.1],[536,308.1]],"color":"#828282"},{"points":[[515,290.1],[517,312.1],[536,308.1]],"color":"#EAEAEA"},{"points":[[517,312.1],[526,315.1],[536,308.1]],"color":"#979797"},{"points":[[526,324.1],[526,344.1],[539,345.1]],"color":"#7C7C7C"},{"points":[[526,344.1],[536,356.1],[539,345.1]],"color":"#C9C9C9"},{"points":[[519,209.1],[531,208.1],[540,194.1]],"color":"#454545"},{"points":[[532,175.1],[519,209.1],[540,194.1]],"color":"#424242"},{"points":[[528,267.1],[515,290.1],[543,295.1]],"color":"#E5E5E5"},{"points":[[515,290.1],[536,308.1],[543,295.1]],"color":"#F0F0F0"},{"points":[[535,412],[525,430],[544,424]],"color":"#C3C3C3"},{"points":[[525,430],[505,458],[546,447]],"color":"#C6C6C6"},{"points":[[544,424],[525,430],[546,447]],"color":"#B0B0B0"},{"points":[[528,370],[534,382],[547,381]],"color":"#B4B4B4"},{"points":[[536,356.1],[528,370],[547,381]],"color":"#F3F3F3"},{"points":[[534,382],[529,398],[547,381]],"color":"#E2E2E2"},{"points":[[529,398],[535,412],[551,414]],"color":"#868686"},{"points":[[535,412],[544,424],[551,414]],"color":"#DBDBDB"},{"points":[[536,308.1],[526,324.1],[554,325.1]],"color":"#828282"},{"points":[[526,324.1],[539,345.1],[554,325.1]],"color":"#686868"},{"points":[[544,424],[546,447],[555,438]],"color":"#BDBDBD"},{"points":[[528,267.1],[543,295.1],[557,254.1]],"color":"#404040"},{"points":[[531,208.1],[528,267.1],[557,254.1]],"color":"#4F4F4F"},{"points":[[554,325.1],[539,345.1],[559,338.1]],"color":"#524FA1"},{"points":[[532,175.1],[540,194.1],[560,173.1]],"color":"#524FA1"},{"points":[[525,162.1],[532,175.1],[560,173.1]],"color":"#646464"},{"points":[[543,295.1],[536,308.1],[561,315.1]],"color":"#CBCBCB"},{"points":[[536,308.1],[554,325.1],[561,315.1]],"color":"#6F6F6F"},{"points":[[539,345.1],[536,356.1],[566,348.1]],"color":"#6DC8BF"},{"points":[[559,338.1],[539,345.1],[566,348.1]],"color":"#437B76"},{"points":[[536,356.1],[547,381],[567,360.1]],"color":"#E8E8E8"},{"points":[[566,348.1],[536,356.1],[567,360.1]],"color":"#E6E6E6"},{"points":[[415,101.1],[525,162.1],[572,173.1]],"color":"#919191"},{"points":[[525,162.1],[560,173.1],[572,173.1]],"color":"#B7B7B7"},{"points":[[554,325.1],[559,338.1],[576,331.1]],"color":"#C1C1C1"},{"points":[[561,315.1],[554,325.1],[576,331.1]],"color":"#9A03FF"},{"points":[[561,315.1],[576,331.1],[577,314.1]],"color":"#9A03FF"},{"points":[[559,338.1],[566,348.1],[578,336.1]],"color":"#797979"},{"points":[[576,331.1],[559,338.1],[578,336.1]],"color":"#949494"},{"points":[[543,295.1],[561,315.1],[579,270.1]],"color":"#494949"},{"points":[[561,315.1],[577,314.1],[579,270.1]],"color":"#662D91"},{"points":[[557,254.1],[543,295.1],[579,270.1]],"color":"#484848"},{"points":[[578,336.1],[566,348.1],[580,337.1]],"color":"#D7D7D7"},{"points":[[576,331.1],[578,336.1],[580,337.1]],"color":"#B7B7B7"},{"points":[[560,173.1],[540,194.1],[581,203.1]],"color":"#524FA1"},{"points":[[572,173.1],[560,173.1],[581,203.1]],"color":"#7A7A7A"},{"points":[[540,194.1],[531,208.1],[581,203.1]],"color":"#505050"},{"points":[[531,208.1],[557,254.1],[581,203.1]],"color":"#3F3F3F"},{"points":[[566,348.1],[567,360.1],[593,356.1]],"color":"#EEEEEE"},{"points":[[580,337.1],[566,348.1],[593,356.1]],"color":"#EDEDED"},{"points":[[557,254.1],[579,270.1],[594,224.1]],"color":"#4C4C4C"},{"points":[[581,203.1],[557,254.1],[594,224.1]],"color":"#524FA1"},{"points":[[580,337.1],[593,356.1],[595,339.1]],"color":"#F2F2F2"},{"points":[[576,331.1],[580,337.1],[598,325.1]],"color":"#B5B5B5"},{"points":[[580,337.1],[595,339.1],[598,325.1]],"color":"#D5D5D5"},{"points":[[577,314.1],[576,331.1],[598,325.1]],"color":"#D3D3D3"},{"points":[[598,325.1],[595,339.1],[599,326.1]],"color":"#5B5B5B"},{"points":[[595,339.1],[593,356.1],[599,343.1]],"color":"#F2F2F2"},{"points":[[593,356.1],[567,360.1],[600,374]],"color":"#EEEEEE"},{"points":[[572,173.1],[581,203.1],[602,179.1]],"color":"#717171"},{"points":[[415,101.1],[572,173.1],[602,179.1]],"color":"#888888"},{"points":[[581,203.1],[594,224.1],[606,223.1]],"color":"#686868"},{"points":[[602,179.1],[581,203.1],[606,223.1]],"color":"#5C5C5C"},{"points":[[593,356.1],[600,374],[607,370]],"color":"#EBEBEB"},{"points":[[599,326.1],[595,339.1],[610,341.1]],"color":"#606060"},{"points":[[595,339.1],[599,343.1],[610,341.1]],"color":"#5B5B5B"},{"points":[[593,356.1],[607,370],[611,362.1]],"color":"#848484"},{"points":[[599,343.1],[593,356.1],[611,362.1]],"color":"#818181"},{"points":[[610,341.1],[599,343.1],[611,362.1]],"color":"#7B7B7B"},{"points":[[610,341.1],[611,362.1],[616,341.1]],"color":"#BABABA"},{"points":[[598,325.1],[599,326.1],[618,324.1]],"color":"#4F4F4F"},{"points":[[610,341.1],[616,341.1],[619,332.1]],"color":"#B8B8B8"},{"points":[[599,326.1],[610,341.1],[619,332.1]],"color":"#606060"},{"points":[[618,324.1],[599,326.1],[619,332.1]],"color":"#5B5B5B"},{"points":[[598,325.1],[618,324.1],[624,315.1]],"color":"#5B5B5B"},{"points":[[579,270.1],[577,314.1],[624,315.1]],"color":"#662D91"},{"points":[[577,314.1],[598,325.1],[624,315.1]],"color":"#454545"},{"points":[[618,324.1],[619,332.1],[625,332.1]],"color":"#E5E5E5"},{"points":[[624,315.1],[618,324.1],[625,332.1]],"color":"#EAEAEA"},{"points":[[619,332.1],[616,341.1],[625,332.1]],"color":"#DCDCDC"},{"points":[[616,341.1],[611,362.1],[625,332.1]],"color":"#D8D8D8"},{"points":[[602,179.1],[606,223.1],[628,242.1]],"color":"#524FA1"},{"points":[[579,270.1],[624,315.1],[628,242.1]],"color":"#474747"},{"points":[[594,224.1],[579,270.1],[628,242.1]],"color":"#524FA1"},{"points":[[606,223.1],[594,224.1],[628,242.1]],"color":"#585858"},{"points":[[602,179.1],[628,242.1],[641,248.1]],"color":"#969696"},{"points":[[628,242.1],[624,315.1],[641,248.1]],"color":"#524FA1"},{"points":[[602,179.1],[641,248.1],[749,224.1]],"color":"#B5B5B5"},{"points":[[602,179.1],[749,224.1],[1110,-3]],"color":"#9A03FF"}];
var sin = [];

var elemsIn = [];
var elemsOut = [];
var elemsBoth = [];
var len = data.length;

var paused = false;
var marker = 0;
var interval = 0;

var frame = 0;
var fps = 12;
var fAnim = Math.floor(800*fps/1000);
var fCount = Math.floor(2700*fps/1000);

for (var i = 0; i < fAnim ; i++) {
	sin.push((Math.sin(i/(2*fAnim-2)*Math.PI)).toPrecision(2));
}

/*
data.map(function(d) {
    d.points = d3.geom.polygon(d.points);
});
*/

var svg = d3.select("#intro-pic")
  .append("svg")
  .attr("x", "0px")
  .attr("y", "0px")
  .attr("viewBox", "0 0 1110 741.1")
  .append("g");

var polys = svg.selectAll("polygon")
  .data(data)
  .enter().append("svg:polygon")
  .attr("points", function(d) {
    return d.points;
  })
  .attr("fill", function(d) {
    return d.color;
  })
  .style('opacity', 1);

var polysIn = polys.filter(false);
var polysOut = polys.filter(false);

var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

var timeFunc = function() {

  if (!paused) {
	
	  if(frame < fAnim) {
		  polysOut.style('opacity', sin[frame]);
		  polysIn.style('opacity', 1-sin[frame]);
	  }

	  if(frame === fCount-1) {
		  elemsOut = elemsIn;
		  elemsIn = [];
		  elemsBoth = [];
		  for (var i = Math.random() * len / 10 + len / 10; i >=0 ; i--) {
		      var r = Math.floor(Math.random() * len);
		      	if(elemsIn.indexOf(r) < 0 ) {
		      		elemsIn.push(r);

					if(elemsOut.indexOf(r) > 0 ) {
			      		elemsBoth.push(r);
					}
				}
		  } 
		  polysOut = polys.filter(function(d, i) {
		      return elemsOut.indexOf(i) != -1 && elemsBoth.indexOf(i) == -1;
		  });

		  polysIn = polys.filter(function(d, i) {
		      return elemsIn.indexOf(i) != -1 && elemsBoth.indexOf(i) == -1;
		  });
	  }
	  frame = (frame + 1)%fCount;
	}

};

var myTimer = setInterval(timeFunc, 1000/fps);

svg.on("click", function() {

		clearInterval(myTimer);
		paused = !paused;
		polys .transition()
		  		.duration(300)
		  		.style('opacity', 1);

		if(!paused) {
			frame = 0;
			polysOut = polys.filter(false);
			myTimer = setInterval(timeFunc, 1000/fps);
		}

  	})
	.on("mousemove", function(d) {		
		if(marker === 0) {
			interval = Date.now(); 
			marker = 1;
		}
		if(Date.now() - marker > 240000 ){
			if(Date.now() - interval < 3500) {
				div .transition()		
			        .duration(30)		
			        .style("opacity", .9);		
			    div	.html("Click to Pause/Resume")	
			        .style("left", (d3.event.pageX - 55) + "px")		
			        .style("top", (d3.event.pageY + 20) + "px");	
		    } else {
		    	marker = Date.now();
       			div .transition()		
		        	.duration(30)	
		        	.style("opacity", 0);	
		    }
	    } else {
	    	interval = Date.now();
	    }
	})					
	.on("mouseleave", function(d) {	
        div .transition()		
        	.duration(30)	
        	.style("opacity", 0);
	});