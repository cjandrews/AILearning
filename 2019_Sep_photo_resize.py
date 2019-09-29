import os

srcdir = "D:\\Personal\\Important Documents\\photos\\2019"
destdir = "D:\\chris_tech\\2019AIResearch"

dirs = os.listdir(srcdir)
subdirs = []
for item in dirs:
  if (os.path.isdir(srcdir + "\\" + item)):
      subdirs += [srcdir + "\\" + item]
      
def getImagesByPath(path):

  return 5 * x