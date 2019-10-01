import os

srcdir = "D:\\Personal\\Important Documents\\photos\\2019"
destdir = "D:\\chris_tech\\2019AIResearch"

# Get a tuple of directories with an array of their subdirs
def getDirsByPath(srcdir):
  dirs = os.listdir(srcdir)
  subdirs = []
  for item in dirs:
    tdata = srcdir + "\\" + item
    if (os.path.isdir(tdata)):
        subdirs += [(tdata, getDirsByPath(tdata))]
  return subdirs

def getFilesByPathType(srcdir, typ=".jpg"):
  dirs = os.listdir(srcdir)
  files = []
  for item in dirs:
    tdata = srcdir + "\\" + item
    if (os.path.isfile(tdata)):
        if (tdata[len(tdata) - len(typ):] == typ):
            files.append(tdata)
    else:
        if (os.path.isdir(tdata)):
            files += getFilesByPathType(tdata)
  return files
