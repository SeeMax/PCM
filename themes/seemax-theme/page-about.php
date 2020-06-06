<?php /* Template Name: About */ get_header(); ?>
	<main class="about-page">
		<?php while (have_posts()) : the_post(); ?>
	    <section class="hero-section">
				<img class="grid-svg" src="<?php echo get_template_directory_uri();?>/img/grid.svg" >
				<div class="content">
					<?php the_title();?>
					<!-- <h1>PCM Services Provides a bunch of services</h1> -->
					<h1><?php echo get_the_date();?></h1>
					<h2><?php echo get_the_date();?></h2>
					<h3><?php echo get_the_date();?></h3>
					<h4><?php echo get_the_date();?></h4>
					<h5><?php echo get_the_date();?></h5>
					<p><?php echo get_the_date();?></p>
					<ul>
						<?php echo get_the_date();?>
						<li>
							<?php echo get_the_date();?>
						</li>
						<li>
							<?php echo get_the_date();?>
						</li>
						<li>
							<?php echo get_the_date();?>
						</li>
					</ul>
					<?php echo get_the_date();?>
				</div>
	    </section>
			<section class="main-section">
				<div class="content">

        </div>
	    </section>
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
