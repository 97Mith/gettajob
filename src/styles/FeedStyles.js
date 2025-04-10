import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  postFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: 14,
    color: '#333',
  },
  comments: {
    fontSize: 14,
    color: '#333',
  },
  caption: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: '#444',
    fontSize: 14,
  },
  imageWrapper: {
    position: 'relative',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  
  overlayText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 2,
    fontWeight: '600',
  },
  overlayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  
  icon: {
    marginRight: 6,
  },
  
  
});

export default styles;