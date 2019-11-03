pageEngine.init('.wrapper',['#35b5d2','#48d684','#ebb440'])
            .addContent('oneContent')
            	.addComponent( {
                type: 'base',
                className: 'duyi',
                width: '100%',
                height: '100%',
                center: false,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/university1.jpg)',
                    backgroundSize: '100% 100%',                        
                    
                    
                },
                animateIn: {
                    opacity: 1,
                  },
                
                delay: 200,
                event: {
                    click: function () {
                        alert($(this).text());
                    }
                }
            })
            	.addComponent({
            		type:'base',
            		width:'98%',
            		height:'30px',
            		text:'湖南文理学院（Hunan University of Arts and Science）简称“湖南文理”，坐落于湘西北历史文化名城——常德市，学校是湖南省人民政府举办、湖南省与常德市',
            		css:{
            			position:'absolute',
            			opacity: 0,
            			left:'-98%',
            			top:'30px',
            			fontSize:'18px',
            			fontWeight: '900',
                    	lineHeight: '30px',
                    	color:'#444'
            		},
            		animateIn: {
                    opacity: 1,
            		top:'30px',
                    left:'15px',

                     
                },
                animateOut: {
                    opacity: 0,
                    left:'-98%',
            		top:'30px',
                },
                 delay: 200,
                 delayAni:1000,
            	})
            		.addComponent({
            		type:'base',
            		width:'98%',
            		height:'30px',
            		text:'共建的全日制普通高等学校，被确定为国家“产教融合工程应用型本科规划高校”，入选“湖南省2011计划”，2017年被湖南省教育厅确定为新增硕士学位授予立项建',
            		css:{
            			position:'absolute',
            			opacity: 0,
            			right:'-98%',
                   		top:'60px',
            			fontSize:'18px',
            			fontWeight: '900',
                    	lineHeight: '30px',
                    	color:'#444'
            		},
            		animateIn: {
                    opacity: 1,
                    top:'60px',
                    right:'15px',

                     
                },
                animateOut: {
                    opacity: 0,
                    right:'-98%',
                   	top:'60px',
                },
                 delay: 200,
                 delayAni:1000,
            	})
            			.addComponent({
            		type:'base',
            		width:'98%',
            		height:'30px',
            		text:'设单位。',
            		css:{
            			position:'absolute',
            			opacity: 0,
            			left:'-98%',
            			top:'90px',
            			fontSize:'18px',
            			fontWeight: '900',
                    	lineHeight: '30px',
                    	color:'#444'
            		},
            		animateIn: {
                    opacity: 1,
                    top:'90px',
                    left:'15px',
				 },
                animateOut: {
                    opacity: 0,
                    left:'-98%',
            	    top:'90px',
                },
                 delay: 200,
                 delayAni:1000,
            	})
		            	.addContent('twoContent')
		            		.addComponent({
		            			type:'base',
		            			width:'300px',
		            			
		            			text:'发展历程',
		            			css:{
		            				opacity:0,
		            				margin:'40px auto 0px',
		            				fontSize:'50px',
		            				color:'white'
								},
								delay:0,
								delayAniIn:500,
								delayAniOut:0,
								animateIn:{
									opacity:1,
									fontSize:'50px'

								},
								animateOut:{
									fontSize:'20px',
									opacity:0.2
								}
								
		            		})
		            			.addComponent({
		            				type:'base',
		            				width:'300px',
		            				
		            				text:'DEVELOPMENT PROCESS',
		            				css:{
		            					opacity:0,
		            					margin:'0px auto',
		            					fontSize:'20px',
		            					color:'white'
		            				},
		            				delay:0,
									delayAniIn:500,
									delayAniOut:0,
									animateIn:{
									opacity:1,
									fontSize:'20px'

								},
								animateOut:{
									fontSize:'10px',
									opacity:0.3
								}

		            			})
		            				.addComponent({
		            					type:'base',
		            					width:'0px',
		            					height:'450px',
		            					
		            					css:{
		            						opacity:0.1,
		            						border:'1px solid white',
		            						position:'absolute',
		            						left:'50%',
		            						top:'140px',
		            						margin:'20px auto 0px'
										},
										delay:0,
										delayAni:800,
										animateIn:{
										 opacity:1
									},
										animateOut:{
										 opacity:1
									}
									
		            				})
		            					.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px 0px',
		            							position:'absolute',
		            							top:'150px',
		            							left:'50px',
		            							marginLeft:'-22px'
		            						},
		            						delay:200,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            					.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1958年，常德师范专科学校创建',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'1200px',
		            							top:'150px',
		            							lineHeight:'50px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:300,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'0px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            						.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -45px',
		            							position:'absolute',
		            							top:'220px',
		            							left:'85%'
		            							
		            						},
		            						delay:200,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            							.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1989年，湖南农学院（常德分院）、常德引进高教培训中心并入常德高等专科学校。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'-200px',
		            							top:'220px',
		            							lineHeight:'20px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:300,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-450px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})

		            							.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -90px',
		            							position:'absolute',
		            							top:'290px',
		            							left:'50px',
		            							marginLeft:'-22px'
		            						},
		            						delay:300,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            								.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1971年，常德师范专科学校（原常德地区教师进修学院部分）改建常德教育学院。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'1200px',
		            							top:'290px',
		            							lineHeight:'20px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:400,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'60px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            								.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -135px',
		            							position:'absolute',
		            							top:'360px',
		            							left:'85%'
		            							
		            						},
		            						delay:400,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            									.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1989年，常德市城乡建设技术学校创建。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'-200px',
		            							top:'360px',
		            							lineHeight:'50px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:500,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-400px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            									.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -180px',
		            							position:'absolute',
		            							top:'430px',
		            							left:'50px',
		            							marginLeft:'-22px'
		            						},
		            						delay:500,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            										.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1994年，常德戏剧学校更名为常德艺术学校。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'1200px',
		            							top:'430px',
		            							lineHeight:'20px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:600,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'50px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            										.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -225px',
		            							position:'absolute',
		            							top:'500px',
		            							left:'85%'
		            							
		            						},
		            						delay:600,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            											.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'1999年，常德师范高等专科学校、常德高等专科学校、常德教育学院合并升格为常德师范学院。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'-200px',
		            							top:'500px',
		            							lineHeight:'20px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:700,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-450px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            											.addComponent({
		            						type:'base',
		            						width:'44px',
		            						height:'44px',
		            						lock : true,
		            						css:{
		            							opacity:0,
		            							backgroundImage:'url(https://staticlive.douyucdn.cn/common/jobs_about/images/circle.png?2015021)',
		            							backgroundPosition:'0px -271px',
		            							position:'absolute',
		            							top:'570px',
		            							left:'50px',
		            							marginLeft:'-22px'
		            						},
		            						delay:700,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'-22px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            											.addComponent({
		            						type:'base',
		            						width:'400px',
		            						height:'80px',
		            						text:'2003年，常德师范学院更名为湖南文理学院。',
		            						lock:true,
		            						css:{
		            							opacity:0,
		            							position:'absolute',
		            							left:'1200px',
		            							top:'570px',
		            							lineHeight:'50px',
		            							fontSize:'18px',
		            							color:'white'
		            							},
		            						delay:800,
		            						delayAni:800,
		            						animateIn:{
		            							opacity:1,
		            							left:'50%',
		            							marginLeft:'50px'
		            						},
		            						animateOut:{
		            							opacity:1,
		            							
		            						}
		            					})
		            			.addContent('threeContent')
		            				.addComponent({
		            			type:'base',
		            			width:'300px',
		            			
		            			text:'校园风光',
		            			css:{
		            				opacity:0,
		            				margin:'40px auto 0px',
		            				fontSize:'50px',
		            				color:'white'
								},
								delay:0,
								delayAniIn:500,
								delayAniOut:0,
								animateIn:{
									opacity:1,
									fontSize:'50px'

								},
								animateOut:{
									fontSize:'20px',
									opacity:0.2
								}
								
		            		})
		            			.addComponent({
		            				type:'base',
		            				width:'300px',
		            				
		            				text:'CAMPUS SCENES',
		            				css:{
		            					opacity:0,
		            					margin:'0px auto',
		            					fontSize:'20px',
		            					color:'white'
		            				},
		            				delay:0,
									delayAniIn:500,
									delayAniOut:0,
									animateIn:{
									opacity:1,
									fontSize:'20px'

								},
								animateOut:{
									fontSize:'10px',
									opacity:0.3
								}

		            			})
		            				.addComponent({
		            					type:'base',
		            					width:'400px',
		            					height:'310px',
		            					css:{
		            						position:'absolute',
		            						left:'0px',
		            						top:'0px',
		            						backgroundImage:'url(./src/img/university6.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:100,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'400px',
		            						height:'310px',
		            						opacity:1,
		            						top:'150px',
		            						left:'120px'
										},
										animateOut:{
											width:'400px',
		            					    height:'320px',
											opacity:0,
											top:'opx',
											left:'0px'
										}

		            				})
		            					.addComponent({
		            					type:'base',
		            					width:'300px',
		            					height:'150px',
		            					css:{
		            						position:'absolute',
		            						left:'600px',
		            						top:'0px',
		            						backgroundImage:'url(./src/img/university8.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:100,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'300px',
		            						height:'150px',
		            						opacity:1,
		            						top:'150px',
		            						left:'540px'
										},
										animateOut:{
											width:'300px',
											height:'150px',
											opacity:0,
											top:'opx',
											left:'600px'
										}

		            				})
		            						.addComponent({
		            					type:'base',
		            					width:'300px',
		            					height:'150px',
		            					css:{
		            						position:'absolute',
		            						left:'600px',
		            						top:'0px',
		            						backgroundImage:'url(./src/img/university9.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:200,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'300px',
		            						height:'150px',
		            						opacity:1,
		            						top:'310px',
		            						left:'540px'
										},
										animateOut:{
											width:'300px',
											height:'150px',
											opacity:0,
											top:'0px',
											left:'600px'
										}

		            				})
		            						.addComponent({
		            					type:'base',
		            					width:'410px',
		            					height:'310px',
		            					css:{
		            						position:'absolute',
		            						left:'1200px',
		            						top:'0px',
		            						backgroundImage:'url(./src/img/university4.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:200,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'350px',
		            						height:'310px',
		            						opacity:1,
		            						top:'150px',
		            						left:'860px'
										},
										animateOut:{
											width:'350px',
											height:'310px',
											opacity:0,
											top:'0px',
											left:'1200px'
										}

		            				})
		            						.addComponent({
		            					type:'base',
		            					width:'400px',
		            					height:'150px',
		            					css:{
		            						position:'absolute',
		            						left:'0px',
		            						bottom:'0px',
		            						backgroundImage:'url(./src/img/university2.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:200,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'400px',
		            						height:'150px',
		            						opacity:1,
		            						top:'470px',
		            						left:'120px'
										},
										animateOut:{
											width:'400px',
											height:'150px',
											opacity:0,
											left:'0px',
		            						bottom:'0px',
										}

		            				})
		            						.addComponent({
		            					type:'base',
		            					width:'300px',
		            					height:'150px',
		            					css:{
		            						position:'absolute',
		            						left:'600px',
		            						bottom:'0px',
		            						backgroundImage:'url(./src/img/university3.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:200,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'300px',
		            						height:'150px',
		            						opacity:1,
		            						top:'470px',
		            						left:'540px'
										},
										animateOut:{
											width:'300px',
											height:'150px',
											opacity:0,
											bottom:'0px',
											left:'600px'
										}

		            				})
		            						.addComponent({
		            					type:'base',
		            					width:'410px',
		            					height:'310px',
		            					css:{
		            						position:'absolute',
		            						left:'1200px',
		            						bottom:'0px',
		            						backgroundImage:'url(./src/img/university5.jpg)',
		            						backgroundSize:'100% 100%',
		            						opacity:0
		            					},
		            					delay:200,
		            					delayAni:1000,
		            					animateIn:{
		            						width:'350px',
		            						height:'150px',
		            						opacity:1,
		            						top:'470px',
		            						left:'860px'
										},
										animateOut:{
											width:'350px',
											height:'150px',
											opacity:0,
											left:'1200px',
		            						bottom:'0px',
										}

		            				})
		            		.delay(20);




